# 🍎 InflaFood - MVP Prototipo

Aplicación web para consultar precios de alimentos saludables y ver cómo han variado en los últimos 7 días.

## 📋 Requisitos

- **Node.js** (v14 o superior)
- **npm** (incluido con Node.js)

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

#### Backend:
```bash
cd backend
npm install
```

#### Frontend:
```bash
cd frontend
npm install
```

### 2. Ejecutar los servidores

Abre **dos terminales** diferentes:

#### Terminal 1 - Backend (Puerto 3001):
```bash
cd backend
npm start
```

Deberías ver:
```
🍎 Servidor backend ejecutándose en http://localhost:3001
```

#### Terminal 2 - Frontend (Puerto 3000):
```bash
cd frontend
npm start
```

Deberías ver:
```
🌐 Servidor frontend ejecutándose en http://localhost:3000
```

### 3. Acceder a la aplicación

Abre tu navegador en:
```
http://localhost:3000
```

## 📱 Características

✅ **Formulario de selección** - Desplegable con 5 opciones de alimentos saludables
✅ **Consulta de precios** - Obtén el precio actual de cualquier alimento
✅ **Comparativa temporal** - Visualiza el precio de hace 7 días
✅ **Indicador de cambio** - Ve si el precio ha subido 📈 o bajado 📉
✅ **Responsive** - Optimizado para móviles (breakpoint 480px)
✅ **Estética saludable** - Colores verde y blanco con gradientes suaves

## 🗂️ Estructura del Proyecto

```
inflafood/
├── backend/
│   ├── package.json
│   ├── server.js              # API REST con Express
│   └── node_modules/
├── frontend/
│   ├── package.json
│   ├── server.js              # Servidor de archivos estáticos
│   ├── index.html             # Estructura HTML
│   ├── styles.css             # Estilos responsive
│   ├── script.js              # Lógica JavaScript vanilla
│   └── node_modules/
└── README.md
```

## 🔌 API Endpoints

### POST /getPrice
Obtiene el precio actual de un alimento

**Request:**
```json
{
  "idFood": 1
}
```

**Response:**
```json
{
  "idFood": 1,
  "nombre": "Manzana",
  "price": 1.50,
  "preciohace7dias": 1.45,
  "cambio": 0.05,
  "cambioProcentaje": "3.45",
  "subio": true
}
```

### GET /foods
Obtiene la lista de todos los alimentos disponibles

**Response:**
```json
[
  { "id": 1, "nombre": "Manzana" },
  { "id": 2, "nombre": "Pechuga de Pollo" },
  ...
]
```

## 🍔 Alimentos disponibles

| ID | Nombre | Precio Actual |
|----|--------|---------------|
| 1  | Manzana | €1.50 |
| 2  | Pechuga de Pollo | €8.99 |
| 3  | Brócoli | €2.75 |
| 4  | Salmón | €12.99 |
| 5  | Yogurt Natural | €3.20 |

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript Vanilla (ES6+)
- **Backend**: Node.js, Express.js
- **CORS**: Habilitado para desarrollo local
- **Arquitectura**: 2 servicios independientes (microservicios básicos)

## 📝 Notas

- Todos los precios y comparativas son datos simulados
- La base de datos es en memoria (se reinicia cada vez que se reinicia el servidor)
- Ideal para desarrollo local y prototipado

---

**¡Disfruta consultando precios de alimentos saludables! 🥗**
