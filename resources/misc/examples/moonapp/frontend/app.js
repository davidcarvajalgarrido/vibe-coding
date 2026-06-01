/* ============================================
   MOONAPP - Lógica de la SPA
   ============================================ */

const API_BASE_URL = 'http://localhost:3000/api';

// Elementos del DOM
const moonForm = document.getElementById('moonForm');
const dateInput = document.getElementById('dateInput');
const dateError = document.getElementById('dateError');
const loading = document.getElementById('loading');
const resultSection = document.getElementById('resultSection');
const errorBox = document.getElementById('errorBox');
const closeButton = document.getElementById('closeButton');
const dismissError = document.getElementById('dismissError');

// Estados
let currentDate = null;

/* ============================================
   INICIALIZACIÓN
   ============================================ */

function init() {
    // Event listeners del formulario
    moonForm.addEventListener('submit', handleFormSubmit);
    
    // Listeners para cerrar resultados
    closeButton.addEventListener('click', closeResultSection);
    dismissError.addEventListener('click', closeErrorBox);
    
    // Validación en tiempo real del input de fecha
    dateInput.addEventListener('change', clearDateError);
    
    // Establecer fecha máxima como hoy
    const today = new Date().toISOString().split('T')[0];
    dateInput.max = today;
}

/* ============================================
   MANEJADORES DE EVENTOS
   ============================================ */

async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Limpiar errores previos
    clearDateError();
    closeErrorBox();
    
    // Validar fecha
    if (!validateDate()) {
        return;
    }
    
    const dateString = dateInput.value;
    currentDate = new Date(dateString);
    
    // Mostrar loading
    showLoading();
    
    try {
        const response = await checkFullMoon(dateString);
        displayResult(response, dateString);
    } catch (error) {
        handleError(error);
    } finally {
        hideLoading();
    }
}

function clearDateError() {
    dateError.textContent = '';
}

function closeResultSection() {
    resultSection.style.display = 'none';
    moonForm.reset();
    dateInput.focus();
}

function closeErrorBox() {
    errorBox.style.display = 'none';
}

/* ============================================
   VALIDACIONES
   ============================================ */

function validateDate() {
    const dateValue = dateInput.value;
    
    if (!dateValue) {
        showDateError('Por favor, selecciona una fecha');
        return false;
    }
    
    const selectedDate = new Date(dateValue);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate > today) {
        showDateError('No puedes consultar fechas futuras');
        return false;
    }
    
    return true;
}

function showDateError(message) {
    dateError.textContent = message;
    dateInput.focus();
}

/* ============================================
   PETICIONES AL BACKEND
   ============================================ */

async function checkFullMoon(dateString) {
    const response = await fetch(`${API_BASE_URL}/fullmoon`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: dateString })
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al consultar la luna');
    }
    
    return await response.json();
}

/* ============================================
   MOSTRAR RESULTADOS
   ============================================ */

function displayResult(data, dateString) {
    // Formatear fecha para mostrar
    const date = new Date(dateString);
    const formattedDate = formatDateDisplay(date);
    
    // Actualizar fecha consultada
    document.getElementById('consultedDate').textContent = formattedDate;
    
    // Mostrar resultado de luna llena
    const fullMoonResult = document.getElementById('fullMoonResult');
    
    if (data.isFullMoon) {
        fullMoonResult.className = 'status-item full-moon';
        fullMoonResult.innerHTML = `
            <strong>🌕 ¡ES LUNA LLENA!</strong>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">La luna está en su máxima gloria en esta fecha</p>
        `;
        
        // Ocultar sección de próxima luna llena
        document.getElementById('nextFullMoonSection').style.display = 'none';
    } else {
        fullMoonResult.className = 'status-item not-full-moon';
        fullMoonResult.innerHTML = `
            <strong>🌙 No es luna llena</strong>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Pero no desesperes, la próxima llegará pronto</p>
        `;
        
        // Mostrar próxima luna llena
        if (data.nextFullMoon) {
            showNextFullMoon(data.nextFullMoon, dateString);
        }
    }
    
    // Mostrar sección de resultados
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showNextFullMoon(nextFullMoonDate, currentDateString) {
    const nextSection = document.getElementById('nextFullMoonSection');
    const currentDate = new Date(currentDateString);
    const nextDate = new Date(nextFullMoonDate);
    
    const formattedNextDate = formatDateDisplay(nextDate);
    const daysUntil = calculateDaysBetween(currentDate, nextDate);
    
    document.getElementById('nextFullMoonDate').textContent = formattedNextDate;
    
    const daysText = daysUntil === 1 ? 'día' : 'días';
    document.getElementById('daysAway').textContent = `(en ${daysUntil} ${daysText})`;
    
    nextSection.style.display = 'block';
}

/* ============================================
   MANEJADOR DE ERRORES
   ============================================ */

function handleError(error) {
    console.error('Error:', error);
    
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = error.message || 'Ha ocurrido un error al consultar la luna. Intenta más tarde.';
    
    errorBox.style.display = 'block';
    errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ============================================
   UTILIDADES
   ============================================ */

function showLoading() {
    loading.style.display = 'flex';
}

function hideLoading() {
    loading.style.display = 'none';
}

function formatDateDisplay(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return date.toLocaleDateString('es-ES', options);
}

function calculateDaysBetween(date1, date2) {
    const timeDiff = Math.abs(date2 - date1);
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

/* ============================================
   INICIAR LA APP
   ============================================ */

document.addEventListener('DOMContentLoaded', init);
