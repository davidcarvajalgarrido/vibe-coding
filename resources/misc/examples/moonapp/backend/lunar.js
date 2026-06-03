/* ============================================
   CÁLCULO DE FASES LUNARES
   
   Algoritmo basado en el ciclo lunar sincrónico:
   - Ciclo lunar: ~29.53 días
   - Luna nueva de referencia: 1999-12-07 (fecha astronómica conocida)
   ============================================ */

// Fecha de referencia de luna nueva conocida (en tiempo Unix)
const KNOWN_NEW_MOON = new Date('1999-12-07').getTime();
const LUNAR_CYCLE = 29.530588861; // Ciclo lunar en días (ciclo sincrónico)
const FULL_MOON_THRESHOLD = 1.5; // Margen en días para considerar luna llena

/**
 * Obtiene el día del ciclo lunar para una fecha dada (0-29.53)
 * 0 = Luna Nueva
 * ~14.76 = Luna Llena
 */
function getLunarDayOfCycle(date) {
    const dateTime = new Date(date).getTime();
    const daysSinceReference = (dateTime - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
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

module.exports = {
    getLunarDayOfCycle,
    isFullMoon,
    getNextFullMoon,
    LUNAR_CYCLE,
    FULL_MOON_THRESHOLD,
    KNOWN_NEW_MOON
};
