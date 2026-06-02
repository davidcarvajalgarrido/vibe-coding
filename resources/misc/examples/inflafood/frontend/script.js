const API_URL = 'http://localhost:3001';

// Elementos del DOM
const foodForm = document.getElementById('foodForm');
const foodSelect = document.getElementById('foodSelect');
const resultSection = document.getElementById('resultSection');
const foodNameEl = document.getElementById('foodName');
const currentPriceEl = document.getElementById('currentPrice');
const oldPriceEl = document.getElementById('oldPrice');
const changeIndicatorEl = document.getElementById('changeIndicator');
const loadingMessageEl = document.getElementById('loadingMessage');
const errorMessageEl = document.getElementById('errorMessage');

// Cargar lista de alimentos al iniciar
document.addEventListener('DOMContentLoaded', () => {
  loadFoodsList();
});

// Cargar lista de alimentos disponibles
async function loadFoodsList() {
  try {
    const response = await fetch(`${API_URL}/foods`);
    const foods = await response.json();

    foods.forEach(food => {
      const option = document.createElement('option');
      option.value = food.id;
      option.textContent = food.nombre;
      foodSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error al cargar alimentos:', error);
    errorMessageEl.textContent = 'Error al cargar la lista de alimentos';
    errorMessageEl.classList.add('show');
  }
}

// Enviar formulario
foodForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const idFood = foodSelect.value;

  if (!idFood) {
    showError('Por favor selecciona un alimento');
    return;
  }

  await fetchPrice(idFood);
});

// Obtener precio del servidor
async function fetchPrice(idFood) {
  // Mostrar estado de carga
  showLoading(true);
  clearError();

  try {
    const response = await fetch(`${API_URL}/getPrice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idFood: parseInt(idFood) })
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();
    displayResult(data);
  } catch (error) {
    console.error('Error al obtener el precio:', error);
    showError('Error al consultar el precio. Intenta de nuevo.');
  } finally {
    showLoading(false);
  }
}

// Mostrar resultado
function displayResult(data) {
  // Actualizar información del alimento
  foodNameEl.textContent = data.nombre;
  currentPriceEl.textContent = `€${data.price.toFixed(2)}`;
  oldPriceEl.textContent = `€${data.preciohace7dias.toFixed(2)}`;

  // Indicador de cambio
  changeIndicatorEl.classList.remove('up', 'down');

  if (data.cambio > 0) {
    changeIndicatorEl.classList.add('up');
    changeIndicatorEl.textContent = `📈 Subió €${Math.abs(data.cambio).toFixed(2)} (+${data.cambioProcentaje}%)`;
  } else if (data.cambio < 0) {
    changeIndicatorEl.classList.add('down');
    changeIndicatorEl.textContent = `📉 Bajó €${Math.abs(data.cambio).toFixed(2)} (${data.cambioProcentaje}%)`;
  } else {
    changeIndicatorEl.classList.add('down');
    changeIndicatorEl.textContent = '➡️ Sin cambios en el precio';
  }

  // Mostrar sección de resultados
  resultSection.classList.remove('hidden');
}

// Mostrar/ocultar estado de carga
function showLoading(show) {
  if (show) {
    loadingMessageEl.classList.add('show');
  } else {
    loadingMessageEl.classList.remove('show');
  }
}

// Mostrar error
function showError(message) {
  errorMessageEl.textContent = message;
  errorMessageEl.classList.add('show');
}

// Limpiar error
function clearError() {
  errorMessageEl.textContent = '';
  errorMessageEl.classList.remove('show');
}
