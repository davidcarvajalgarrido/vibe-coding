# Lección 4 — Soluciones

## Ejercicio 1: Solución: Delimitar contexto útil para una refactorización

Un prompt válido podría ser este:

Refactoriza la siguiente función JavaScript para mejorar legibilidad y mantenibilidad sin cambiar su comportamiento. Usa sintaxis compatible con Node.js 18, no añadas dependencias y conserva los nombres de entrada y salida. Devuélveme primero el código final y después una explicación breve de los cambios realizados. Función actual: [pegar función]. La función se usa en un servicio interno y debe seguir devolviendo exactamente el mismo resultado para los mismos inputs.

El resultado esperado es una respuesta centrada en la función, sin rediseñar el sistema completo. La clave es que el contexto incluye objetivo, restricciones, entorno y formato de salida.

## Ejercicio 2: Solución: Reescribir un prompt ambiguo

Una reescritura útil sería esta:

Revisa este controlador de backend en Express y propón una mejora enfocada en manejo de errores y legibilidad. No cambies la firma pública del endpoint ni el formato JSON de respuesta. Devuélveme el código refactorizado, una lista de riesgos detectados y dos casos de prueba manual para verificar que el comportamiento sigue siendo correcto. Código actual: [pegar controlador].

El resultado esperado es verificable porque fija alcance, restricciones y criterios de validación. Ya no pide una mejora genérica, sino una intervención concreta sobre un componente real.

## Ejercicio 3: Solución: Diseñar una iteración correctiva

Un buen mensaje de seguimiento sería este:

La propuesta cambia el comportamiento original: ahora la función devuelve null cuando antes lanzaba una excepción. Mantén exactamente la semántica anterior en casos de error, pero conserva la mejora de legibilidad que introdujiste en la separación de variables intermedias. Revisa solo esa parte y devuelve el código corregido junto con una nota breve indicando qué ajustaste.

El resultado esperado es una segunda respuesta más alineada, porque identifica el fallo, preserva lo útil y acota la corrección necesaria.

## Ejercicio 4: Solución: Crear un resumen de estado de conversación

Un resumen operativo correcto podría ser este:

1. Objetivo: identificar por qué el endpoint POST /orders devuelve 500 al procesar pedidos con descuento.
2. Hallazgos: el error aparece después de validar el cupón; la traza apunta al cálculo de totales y no a la base de datos.
3. Restricción: no cambiar el contrato del endpoint ni el esquema de respuesta usado por frontend.
4. Siguiente paso: revisar la función calculateOrderTotal con un caso reproducible y proponer hipótesis priorizadas antes de modificar código.

El resultado esperado es que el nuevo hilo arranque con contexto suficiente y sin arrastrar toda la conversación previa.

## Ejercicio 5: Solución: Detectar anti-patrones

Ejemplo 1: "Arregla mi proyecto y optimízalo."
Anti-patrón: ambigüedad total de alcance y criterio de éxito.
Mejora: "Revisa este módulo de autenticación en Python y propón mejoras de legibilidad y manejo de errores sin cambiar la API pública. Devuelve código y checklist de validación."

Ejemplo 2: "Haz una solución mínima, enterprise, sin dependencias, totalmente escalable y lista para producción."
Anti-patrón: instrucciones contradictorias y expectativas irreales.
Mejora: "Propón una versión mínima funcional para este servicio, priorizando claridad y facilidad de prueba. Indica qué aspectos quedarían fuera para una versión de producción."

El resultado esperado es aprender a reconocer prompts que generan respuestas pobres antes de usarlos en tareas reales.
