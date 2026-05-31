# Lección 2 — Soluciones

## Ejercicio 1: Solución: delimitar una petición de generación

Un prompt válido sería:

"Crea una función JavaScript llamada formatPrice(amount) que devuelva un string en euros con dos decimales. Restricciones: no uses librerías externas, lanza error si amount no es numérico y usa el formato final '12.50 EUR'. Ejemplo: entrada 12.5, salida '12.50 EUR'. Devuelve solo la función y 2 ejemplos de uso."

El resultado esperado es una función pequeña, verificable y con reglas claras de validación y formato.

## Ejercicio 2: Solución: convertir una petición vaga en una útil

Una reformulación correcta sería:

"Refactoriza este código para reducir duplicación y mejorar nombres de variables. No cambies el comportamiento observable ni la firma pública de la función. Devuélveme el código refactorizado y una lista breve explicando qué cambios hiciste y por qué."

Esta versión orienta a la IA hacia calidad estructural sin permitir cambios funcionales no deseados.

## Ejercicio 3: Solución: preparar contexto para debugging

Una petición adecuada sería:

const names = users.map(u => u.name);

"Este código falla cuando users es null. Comportamiento esperado: devolver un array vacío si users no existe. Comportamiento real: lanza un error al llamar a map. Explica la causa raíz, propone una solución segura y muestra una versión que también valide que users sea un array."

La respuesta esperada debería identificar el acceso inválido a map y proponer algo como `Array.isArray(users) ? users.map(...) : []`.

## Ejercicio 4: Solución: añadir verificación con tests

Una petición correcta sería:

"Genera tests unitarios con Jest para una función `isValidEmail(email)`. Incluye casos de emails válidos, inválidos, string vacío, null y undefined. Devuelve solo el archivo de test y asegúrate de que cada caso tenga una expectativa clara."

El resultado esperado es una batería de pruebas que cubra entradas normales y bordes relevantes.

## Ejercicio 5: Solución: elegir el patrón adecuado

El patrón adecuado es refactorización.

La justificación es que el endpoint ya funciona y el problema descrito no es de comportamiento nuevo ni de fallo en ejecución, sino de duplicación y mantenibilidad.
