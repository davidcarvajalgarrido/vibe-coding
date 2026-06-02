const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos simulada con precios
const foodDatabase = [
  { 
    id: 1,
    nombre: 'Manzana', 
    precioActual: 1.50, 
    preciohace7dias: 1.45 
  },
  { 
    id: 2,
    nombre: 'Pechuga de Pollo', 
    precioActual: 8.99, 
    preciohace7dias: 9.50 
  },
  { 
    id: 3,
    nombre: 'Brócoli', 
    precioActual: 2.75, 
    preciohace7dias: 2.60 
  },
  { 
    id: 4,
    nombre: 'Salmón', 
    precioActual: 12.99, 
    preciohace7dias: 12.50 
  },
  { 
    id: 5,
    nombre: 'Yogurt Natural', 
    precioActual: 3.20, 
    preciohace7dias: 3.40 
  }
];

// Endpoint para obtener precio
app.post('/getPrice', (req, res) => {
  const { idFood } = req.body;

  // Validar que se envió idFood
  if (!idFood) {
    return res.status(400).json({ 
      error: 'idFood es requerido' 
    });
  }

  // Buscar el alimento
  const food = foodDatabase.find(f => f.id === parseInt(idFood));

  if (!food) {
    return res.status(404).json({ 
      error: 'Alimento no encontrado' 
    });
  }

  // Calcular cambio de precio
  const cambio = food.precioActual - food.preciohace7dias;
  const cambioProcentaje = ((cambio / food.preciohace7dias) * 100).toFixed(2);

  res.json({
    idFood: food.id,
    nombre: food.nombre,
    price: food.precioActual,
    preciohace7dias: food.preciohace7dias,
    cambio: parseFloat(cambio.toFixed(2)),
    cambioProcentaje: parseFloat(cambioProcentaje),
    subio: cambio > 0
  });
});

// Endpoint para obtener lista de alimentos
app.get('/foods', (req, res) => {
  const foods = foodDatabase.map(food => ({
    id: food.id,
    nombre: food.nombre
  }));
  res.json(foods);
});

app.listen(PORT, () => {
  console.log(`🍎 Servidor backend ejecutándose en http://localhost:${PORT}`);
});
