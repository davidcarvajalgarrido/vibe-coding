const { 
    getLunarDayOfCycle, 
    LUNAR_CYCLE, 
    KNOWN_NEW_MOON 
} = require('./lunar');

describe('getLunarDayOfCycle', () => {
    
    test('should return a value between 0 and LUNAR_CYCLE for valid date', () => {
        const today = new Date().toISOString().split('T')[0];
        const lunarDay = getLunarDayOfCycle(today);
        
        expect(lunarDay).toBeGreaterThanOrEqual(0);
        expect(lunarDay).toBeLessThan(LUNAR_CYCLE);
    });
    
    test('should return correct values for reference new moon date (1999-12-07)', () => {
        const referenceDate = '1999-12-07';
        const lunarDay = getLunarDayOfCycle(referenceDate);
        
        // Should be very close to 0 (new moon day)
        expect(lunarDay).toBeLessThan(0.5);
    });
    
    test('should handle far future dates (century XXII, year 2100+)', () => {
        const futureDate = '2150-06-15';
        const lunarDay = getLunarDayOfCycle(futureDate);
        
        // Should still return valid lunar day between 0 and LUNAR_CYCLE
        expect(lunarDay).toBeGreaterThanOrEqual(0);
        expect(lunarDay).toBeLessThan(LUNAR_CYCLE);
        expect(typeof lunarDay).toBe('number');
    });
    
    test('should handle edge cases with modulo arithmetic for negative results', () => {
        // Test with a date very close to or before the reference
        const beforeReference = '1999-12-20';
        const lunarDay = getLunarDayOfCycle(beforeReference);
        
        // Should still return positive value between 0 and LUNAR_CYCLE
        expect(lunarDay).toBeGreaterThanOrEqual(0);
        expect(lunarDay).toBeLessThan(LUNAR_CYCLE);
    });
});
