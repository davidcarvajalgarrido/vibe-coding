# Lección 7 — Soluciones

## Ejercicio 1: Solución: Definir un prompt agentic para analizar un bug

Un prompt válido sería:

Eres un asistente técnico. Necesito investigar un bug en una API Node.js/Express que devuelve errores 500 de forma intermitente en el endpoint POST /orders. Contexto: el problema aparece bajo carga moderada, no siempre se reproduce en local y hay logs con timeout a base de datos. Restricciones: no inventes causas sin relacionarlas con la evidencia, no propongas cambios todavía y prioriza análisis sobre implementación.

Quiero una respuesta con este formato:
1. Resumen del problema.
2. Hipótesis ordenadas por probabilidad.
3. Evidencias que apoyarían o debilitarían cada hipótesis.
4. Siguiente paso recomendado para validar la hipótesis principal.

El resultado esperado es una lista priorizada de causas probables y una acción concreta de diagnóstico.

## Ejercicio 2: Solución: Reescribir un prompt demasiado vago

Una reescritura adecuada sería:

Revisa el módulo de autenticación de una aplicación backend en TypeScript. Quiero que identifiques problemas de legibilidad, duplicación y acoplamiento en los archivos auth.service.ts y token.utils.ts. No cambies la API pública del módulo ni la lógica funcional existente.

Devuélveme:
1. Un diagnóstico breve.
2. Un plan de refactorización en 3 pasos.
3. Una propuesta de código para el primer paso.
4. Criterios de aceptación: mismo comportamiento, menos duplicación y funciones con responsabilidad más clara.

Aquí el prompt deja de ser genérico y se vuelve verificable por alcance, archivos y criterios.

## Ejercicio 3: Solución: Estructurar contexto por capas

Un ejemplo correcto sería:

Objetivo: optimizar una función que procesa lotes de datos y tarda demasiado en ejecutarse.
Restricciones: no cambiar el formato de salida, no introducir dependencias nuevas y mantener compatibilidad con Node.js 18.
Estado actual: la función procesa 10.000 registros en unos 18 segundos, usa varios bucles anidados y realiza transformaciones repetidas.
Archivos relevantes: processor.js, transform.js y benchmark.txt con tiempos medidos.

Esta estructura facilita que Claude entienda qué debe mejorar, qué límites tiene y dónde concentrar el análisis.

## Ejercicio 4: Solución: Diseñar una interacción en dos fases

Un ejemplo de fase 1 sería:

Analiza este módulo de envío de emails y detecta riesgos de acoplamiento, puntos de fallo y oportunidades de simplificación. No escribas código todavía. Devuélveme un plan de mejora por fases con impacto esperado y riesgos.

Fase 2:

Implementa solo la fase 1 del plan aprobado: extraer la lógica de construcción del mensaje a una función separada. Explica el cambio, muestra el código resultante y añade un test básico.

La condición para pasar a la segunda fase es que el plan de análisis haya sido revisado y aceptado por el desarrollador.

## Ejercicio 5: Solución: Preparar una revisión guiada de código

Un prompt útil sería:

Revisa la siguiente función con foco exclusivo en seguridad y legibilidad. Quiero que identifiques riesgos como validación insuficiente de entradas, manejo inseguro de errores o exposición innecesaria de datos. Clasifica cada hallazgo como alto, medio o bajo.

Después, propone una versión mejorada del código sin alterar la lógica de negocio ni la firma pública de la función. Explica cada cambio en una frase breve.

El resultado esperado es una revisión enfocada, priorizada y acompañada de una propuesta concreta de mejora.
