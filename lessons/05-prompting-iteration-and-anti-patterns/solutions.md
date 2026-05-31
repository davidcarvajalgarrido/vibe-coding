# Lección 5 — Soluciones

## Ejercicio 1: Solución: Mejorar un prompt ambiguo

Una versión mejorada podría ser esta:

"Necesito una API REST de usuarios en Node.js con Express. Implementa GET /users y POST /users con almacenamiento en memoria, validación básica de name y email, y respuestas 200, 201 y 400. No uses base de datos ni dependencias adicionales. Devuelve el código separado por archivos y añade una breve explicación de cómo probarlo con curl."

Este prompt define objetivo, stack, alcance, restricciones y salida. El resultado esperado es una respuesta verificable con endpoints concretos y criterios claros.

## Ejercicio 2: Solución: Diseñar una plantilla de refactorización

Plantilla propuesta:

"Quiero refactorizar el siguiente código en TypeScript. Contexto: proyecto con ESLint estricto y arquitectura existente basada en servicios. Restricciones: no cambiar la firma pública, no añadir dependencias, no modificar comportamiento observable. Salida: 1) problemas detectados, 2) propuesta de refactor, 3) código final, 4) casos de prueba recomendados. Criterio de calidad: mayor legibilidad, menor duplicación y manejo explícito de edge cases."

El estado final esperado es una instrucción reutilizable para pedir refactorizaciones seguras y revisables.

## Ejercicio 3: Solución: Corregir una iteración deficiente

Feedback mejorado:

"La versión actual introduce demasiados cambios y elimina validaciones existentes. Mantén la misma estructura general, conserva la interfaz pública y aplica solo una refactorización mínima para separar la validación en una función auxiliar. Añade además dos tests: uno para entrada válida y otro para email ausente."

La condición de validación puede cerrarse así:

"La solución es correcta si el comportamiento externo no cambia y los tests siguen pasando."

## Ejercicio 4: Solución: Detectar anti-patrones

Problemas del prompt original:
1) No define alcance.
2) No concreta qué significa escalable, segura o moderna.
3) Invita a rediseño completo sin restricciones.
4) No pide formato de salida ni criterios de validación.

Versión mejorada:

"Analiza el módulo de autenticación actual en una app Node.js. Identifica tres riesgos de escalabilidad o seguridad, priorízalos y propone cambios mínimos sin rediseñar toda la aplicación. Devuelve diagnóstico, propuesta de cambio y forma de validarlo."

## Ejercicio 5: Solución: Preparar un prompt de debugging

Prompt propuesto:

"Tengo un error 500 en el endpoint POST /login de una app Express. Analiza esta traza y el código del controlador. Quiero una respuesta en cuatro partes: 1) causa probable, 2) archivo o función más relevante, 3) cambio mínimo para corregirlo, 4) cómo verificar manualmente y con una prueba automatizada. No rediseñes la arquitectura ni añadas dependencias."

El resultado esperado es una respuesta centrada en diagnóstico y corrección mínima, con verificación concreta.
