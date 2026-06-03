const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const {
    getLunarDayOfCycle,
    isFullMoon,
    getNextFullMoon
} = require('./lunar');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
