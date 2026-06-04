const express = require('express');
const cors = require('cors');
const { getFoodsData, getFoodById } = require('./models/foodModel');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to get food price
app.post('/getPrice', async (req, res) => {
  const { idFood } = req.body;

  // Validate that foodId was provided
  if (!idFood) {
    return res.status(400).json({ 
      error: 'idFood es requerido' 
    });
  }

  // Fetch food data from model
  const food = await getFoodById(idFood);

  if (!food) {
    return res.status(404).json({ 
      error: 'Alimento no encontrado' 
    });
  }

  // Calculate price change
  const priceChange = food.currentPrice - food.priceWeekAgo;
  const changePercentage = ((priceChange / food.priceWeekAgo) * 100).toFixed(2);

  res.json({
    foodId: food.id,
    name: food.name,
    currentPrice: food.currentPrice,
    priceWeekAgo: food.priceWeekAgo,
    priceChange: parseFloat(priceChange.toFixed(2)),
    changePercentage: parseFloat(changePercentage),
    increased: priceChange > 0
  });
});

// Endpoint to get foods list
app.get('/foods', async (req, res) => {
  const foods = await getFoodsData();
  const foodsList = foods.map(food => ({
    id: food.id,
    name: food.name
  }));
  res.json(foodsList);
});

app.listen(PORT, () => {
  console.log(`🍎 Servidor backend ejecutándose en http://localhost:${PORT}`);
});
