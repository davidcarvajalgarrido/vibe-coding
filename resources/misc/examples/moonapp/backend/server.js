const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ============================================
   CÁLCULO DE FASES LUNARES
   
   Algoritmo basado en el ciclo lunar sincrónico:
   - Ciclo lunar: ~29.53 días
   - Luna llena de referencia: 2000-01-06 (fecha astronómica conocida)
   ============================================ */

// Fecha de referencia de luna llena conocida (en tiempo Unix)
const KNOWN_FULL_MOON = new Date('2000-01-06').getTime();
const LUNAR_CYCLE = 29.530588861; // Ciclo lunar en días (ciclo sincrónico)
const FULL_MOON_THRESHOLD = 1.5; // Margen en días para considerar luna llena

/**
 * Obtiene el día del ciclo lunar para una fecha dada (0-29.53)
 * 0 = Luna Nueva
 * ~14.76 = Luna Llena
 */
function getLunarDayOfCycle(date) {
    const dateTime = new Date(date).getTime();
    const daysSinceReference = (dateTime - KNOWN_FULL_MOON) / (1000 * 60 * 60 * 24);
    const lunarDay = daysSinceReference % LUNAR_CYCLE;
    
    // Asegurar que el resultado esté entre 0 y LUNAR_CYCLE
    return lunarDay < 0 ? lunarDay + LUNAR_CYCLE : lunarDay;
}

/**
 * Verifica si una fecha es luna llena (dentro del margen de tolerancia)
 */
function isFullMoon(date) {
    const lunarDay = getLunarDayOfCycle(date);
    const fullMoonDay = LUNAR_CYCLE / 2; // Aproximadamente 14.76
    
    // Verificar si está cerca del día de luna llena
    const diffFromFullMoon = Math.min(
        Math.abs(lunarDay - fullMoonDay),
        Math.abs(lunarDay - fullMoonDay + LUNAR_CYCLE),
        Math.abs(lunarDay - fullMoonDay - LUNAR_CYCLE)
    );
    
    return diffFromFullMoon <= FULL_MOON_THRESHOLD;
}

/**
 * Obtiene la fecha de la próxima luna llena desde una fecha dada
 */
function getNextFullMoon(startDate) {
    const fullMoonDay = LUNAR_CYCLE / 2;
    let checkDate = new Date(startDate);
    
    // Buscar en los próximos 30 días
    for (let i = 0; i <= 30; i++) {
        const lunarDay = getLunarDayOfCycle(checkDate);
        
        // Si encontramos el día de luna llena (o pasamos)
        if (i > 0 && lunarDay < fullMoonDay) {
            return checkDate.toISOString().split('T')[0];
        }
        
        // Si ya pasamos el día de luna llena hoy, buscar en la próxima fase
        if (i === 0 && lunarDay > fullMoonDay) {
            checkDate.setDate(checkDate.getDate() + 1);
            continue;
        }
        
        checkDate.setDate(checkDate.getDate() + 1);
    }
    
    // Fallback: calcular aproximadamente
    const lunarDay = getLunarDayOfCycle(startDate);
    
    let daysUntilFullMoon;
    if (lunarDay <= fullMoonDay) {
        daysUntilFullMoon = fullMoonDay - lunarDay;
    } else {
        daysUntilFullMoon = LUNAR_CYCLE - lunarDay + fullMoonDay;
    }
    
    const nextFullMoonDate = new Date(startDate);
    nextFullMoonDate.setDate(nextFullMoonDate.getDate() + Math.ceil(daysUntilFullMoon));
    
    return nextFullMoonDate.toISOString().split('T')[0];
}

/* ============================================
   VALIDACIONES
   ============================================ */

function validateDate(dateString) {
    const date = new Date(dateString);
    
    // Verificar que sea una fecha válida
    if (isNaN(date.getTime())) {
        return { valid: false, error: 'Formato de fecha inválido. Usa YYYY-MM-DD' };
    }
    
    return { valid: true };
}

/* ============================================
   RUTAS API
   ============================================ */

/**
 * POST /api/fullmoon
 * Consulta si hay luna llena en una fecha específica
 */
app.post('/api/fullmoon', (req, res) => {
    try {
        const { date } = req.body;
        
        // Validar que la fecha esté presente
        if (!date) {
            return res.status(400).json({
                message: 'Campo "date" requerido en formato YYYY-MM-DD',
                isFullMoon: null
            });
        }
        
        // Validar formato de fecha
        const validation = validateDate(date);
        if (!validation.valid) {
            return res.status(400).json({
                message: validation.error,
                isFullMoon: null
            });
        }
        
        // Calcular si es luna llena
        const fullMoon = isFullMoon(date);
        
        // Preparar respuesta
        const response = {
            date,
            isFullMoon: fullMoon,
            lunarPhase: getLunarDayOfCycle(date) // Para debugging si es necesario
        };
        
        // Si no es luna llena, añadir la próxima fecha
        if (!fullMoon) {
            response.nextFullMoon = getNextFullMoon(date);
        }
        
        res.json(response);
        
    } catch (error) {
        console.error('Error en /api/fullmoon:', error);
        res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message
        });
    }
});

/**
 * GET /api/status
 * Verifica que el servidor esté funcionando
 */
app.get('/api/status', (req, res) => {
    res.json({
        status: 'ok',
        message: 'MoonApp Backend está activo',
        timestamp: new Date().toISOString()
    });
});

/**
 * GET /api/fullmoon/info/:date
 * Obtiene información de luna llena para una fecha específica (alternativa GET)
 */
app.get('/api/fullmoon/info/:date', (req, res) => {
    try {
        const { date } = req.params;
        
        // Validar formato de fecha
        const validation = validateDate(date);
        if (!validation.valid) {
            return res.status(400).json({
                message: validation.error
            });
        }
        
        // Calcular si es luna llena
        const fullMoon = isFullMoon(date);
        
        // Preparar respuesta
        const response = {
            date,
            isFullMoon: fullMoon,
            nextFullMoon: !fullMoon ? getNextFullMoon(date) : null
        };
        
        res.json(response);
        
    } catch (error) {
        console.error('Error en /api/fullmoon/info/:date:', error);
        res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message
        });
    }
});

/* ============================================
   MANEJO DE ERRORES GLOBAL
   ============================================ */

app.use((req, res) => {
    res.status(404).json({
        message: 'Endpoint no encontrado',
        path: req.path
    });
});

/* ============================================
   INICIAR SERVIDOR
   ============================================ */

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════╗
║     🌙 MOONAPP BACKEND 🌙             ║
╚═══════════════════════════════════════╝

  Servidor escuchando en puerto ${PORT}
  http://localhost:${PORT}
  
  Endpoints disponibles:
  - POST   /api/fullmoon
  - GET    /api/status
  - GET    /api/fullmoon/info/:date
  
  ¡La luna está de tu lado!
    `);
});

module.exports = app;
