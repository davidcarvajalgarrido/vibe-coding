/**
 * Food Data Model
 * Returns the list of foods with current and historical prices
 *
 * TODO: In the future, replace with:
 *   - External API call
 *   - Database query
 */

/**
 * Gets the list of foods with prices
 * @returns {Promise<Array>} Array of foods with structure: { id, name, currentPrice, priceWeekAgo }
 */
const getFoodsData = async () => {
  // Mock data - Replace with API or database
  const foods = [
    {
      id: 1,
      name: 'Manzana',
      currentPrice: 1.50,
      priceWeekAgo: 1.45
    },
    {
      id: 2,
      name: 'Pechuga de Pollo',
      currentPrice: 8.99,
      priceWeekAgo: 9.50
    },
    {
      id: 3,
      name: 'Brócoli',
      currentPrice: 2.75,
      priceWeekAgo: 2.60
    },
    {
      id: 4,
      name: 'Salmón',
      currentPrice: 12.99,
      priceWeekAgo: 12.50
    },
    {
      id: 5,
      name: 'Yogurt Natural',
      currentPrice: 3.20,
      priceWeekAgo: 3.40
    }
  ];

  return foods;
};

/**
 * Gets a specific food by its ID
 * @param {number} foodId - ID of the food to search
 * @returns {Promise<Object|null>} Food object or null if not found
 */
const getFoodById = async (foodId) => {
  const foods = await getFoodsData();
  return foods.find(food => food.id === parseInt(foodId)) || null;
};

module.exports = {
  getFoodsData,
  getFoodById
};
