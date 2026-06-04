const { getFoodsData, getFoodById } = require('./foodModel');

describe('getFoodById', () => {
  // Test 1: Retorna el food correcto cuando el ID existe
  test('debería retornar el food correcto cuando el ID existe', async () => {
    const result = await getFoodById(1);
    
    expect(result).not.toBeNull();
    expect(result.id).toBe(1);
    expect(result.name).toBe('Manzana');
    expect(result.currentPrice).toBe(1.50);
    expect(result.priceWeekAgo).toBe(1.45);
  });

  // Test 2: Retorna null cuando el ID no existe
  test('debería retornar null cuando el ID no existe', async () => {
    const result = await getFoodById(999);
    
    expect(result).toBeNull();
  });

  // Test 3: Convierte correctamente string a número
  test('debería convertir correctamente string a número', async () => {
    const result = await getFoodById('2');
    
    expect(result).not.toBeNull();
    expect(result.id).toBe(2);
    expect(result.name).toBe('Pechuga de Pollo');
  });

  // Test 4: Retorna null para ID inválido (no numérico)
  test('debería retornar null para ID inválido (no numérico)', async () => {
    const result = await getFoodById('abc');
    
    expect(result).toBeNull();
  });

  // Test 5: Maneja edge case con ID 0 o negativo
  test('debería retornar null para IDs fuera de rango (0 o negativo)', async () => {
    const resultZero = await getFoodById(0);
    const resultNegative = await getFoodById(-1);
    
    expect(resultZero).toBeNull();
    expect(resultNegative).toBeNull();
  });
});
