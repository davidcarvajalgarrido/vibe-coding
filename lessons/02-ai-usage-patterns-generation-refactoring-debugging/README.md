# 02. Patrones de uso de IA en generación, refactorización y debugging

- [Introducción](#introducción)
- [De herramienta genérica a patrón de uso](#de-herramienta-genérica-a-patrón-de-uso)
- [Patrón 1: generación de código con intención acotada](#patrón-1-generación-de-código-con-intención-acotada)
- [Patrón 2: refactorización guiada por restricciones](#patrón-2-refactorización-guiada-por-restricciones)
- [Patrón 3: debugging como investigación asistida](#patrón-3-debugging-como-investigación-asistida)
- [Testing como capa de verificación y cierre del ciclo](#testing-como-capa-de-verificación-y-cierre-del-ciclo)
- [Criterios para elegir el patrón correcto](#criterios-para-elegir-el-patrón-correcto)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En una práctica intermedia de vibe coding, la IA no se usa como un generador indiscriminado de código, sino como un colaborador especializado según el tipo de tarea. En esta lección veremos tres patrones de uso especialmente frecuentes: generación, refactorización y debugging, además de una visión general de cómo se conecta este trabajo con testing. El objetivo es aprender a pedir mejor, validar más rápido y decidir cuándo aceptar, corregir o descartar una propuesta del modelo.

## De herramienta genérica a patrón de uso
Un error común al trabajar con IA en desarrollo es tratar todas las peticiones como si fueran equivalentes. No es lo mismo pedir código nuevo, mejorar código existente o investigar un fallo, porque cada tarea exige distinto contexto, distinto criterio de validación y distinta tolerancia al error.

Pensar en patrones de uso ayuda a estructurar la colaboración con la IA. El desarrollador deja de preguntar de forma improvisada y empieza a preparar entradas, restricciones y resultados esperados según el objetivo técnico.

En esta lección usaremos tres patrones centrales. Generación sirve para crear una base funcional, refactorización para mejorar diseño sin alterar comportamiento y debugging para reducir la incertidumbre cuando algo falla.
## Patrón 1: generación de código con intención acotada
La generación de código funciona mejor cuando el problema está bien delimitado y el resultado esperado es verificable. La IA responde con más calidad si recibe lenguaje del dominio, restricciones técnicas, formato de salida y ejemplos de entrada y salida.

En nivel intermedio, no conviene pedir "hazme toda la aplicación", sino piezas concretas que puedan revisarse con rapidez. Por ejemplo, una función, un endpoint, una clase de servicio o una transformación de datos con reglas explícitas.

Un prompt útil podría ser:

function normalizeUser(user) {
  // completar
}

"Completa esta función en JavaScript. Debe devolver un objeto con name en title case, email en minúsculas y age como entero. Si falta email, lanza un error. No uses librerías externas y añade 3 casos de ejemplo."

Aquí la IA tiene contexto, límites y criterio de aceptación. Eso reduce respuestas ambiguas y facilita evaluar si el código generado merece integrarse o solo sirve como borrador inicial.
## Patrón 2: refactorización guiada por restricciones
La refactorización asistida por IA es especialmente útil cuando el código ya funciona pero presenta duplicación, nombres pobres, complejidad innecesaria o acoplamiento excesivo. En este patrón, el foco no está en crear comportamiento nuevo, sino en mejorar legibilidad, mantenibilidad o estructura.

El detalle clave es indicar qué debe preservarse. Si no se explicita que la lógica observable no puede cambiar, la IA puede introducir variaciones funcionales bajo la excusa de mejorar el diseño.

Un ejemplo de petición sería:

"Refactoriza este módulo para reducir duplicación y separar validación de transformación. Mantén la misma salida para los casos actuales, conserva la firma pública y explica cada cambio en una lista breve."

Este enfoque obliga a la IA a operar con disciplina. Además, pedir explicación de cambios permite revisar intención arquitectónica, no solo el diff final.
## Patrón 3: debugging como investigación asistida
En debugging, la IA no debe usarse como oráculo que adivina errores, sino como asistente de investigación. Su valor aumenta cuando se le comparten síntomas concretos: mensaje de error, stack trace, fragmento mínimo reproducible, comportamiento esperado y comportamiento real.

Una mala petición sería "no funciona, arréglalo". Una buena petición delimita hipótesis y evidencia, por ejemplo:

const total = items.reduce((acc, item) => acc + item.price);

"Este código lanza un error cuando items es undefined. Explica la causa, propone una corrección segura y muestra una versión que no falle si items falta o no es un array."

En este patrón, la respuesta útil no es solo el parche. También importa que la IA ayude a razonar sobre causa raíz, condiciones de fallo y formas de prevenir regresiones similares.
## Testing como capa de verificación y cierre del ciclo
Aunque esta lección no profundiza en testing, conviene entender su papel dentro del flujo asistido por IA. La generación produce propuestas, la refactorización reorganiza código y el debugging corrige fallos, pero el testing aporta la verificación objetiva que evita confiar ciegamente en el modelo.

Una práctica madura consiste en pedir a la IA no solo código, sino también casos de prueba representativos. Eso obliga a concretar supuestos y permite validar si una sugerencia realmente cumple lo prometido.

Por ejemplo, tras una refactorización se puede pedir:

"Genera tests unitarios para cubrir casos válidos, entradas nulas y errores esperados. Usa Jest y prioriza escenarios que detecten cambios de comportamiento."

Este cierre convierte a la IA en acelerador del ciclo de desarrollo, no en sustituto del criterio técnico.
## Criterios para elegir el patrón correcto
Elegir bien el patrón evita frustración y retrabajo. Si falta código y el comportamiento es claro, generación suele ser el camino; si el código funciona pero es difícil de mantener, conviene refactorizar; si existe un fallo observable, debugging debe ser la prioridad.

También cambia la forma de validar. En generación se revisa adecuación funcional, en refactorización se compara comportamiento antes y después, y en debugging se comprueba que el error desaparece sin abrir defectos nuevos.

Un desarrollador intermedio combina estos patrones en secuencia. Puede generar un primer borrador, refactorizarlo para hacerlo sostenible y finalmente depurarlo con ayuda de tests y evidencia concreta.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.github.com/en/copilot" target="_blank">GitHub Copilot Docs</a>
- <a href="https://platform.openai.com/docs" target="_blank">OpenAI Platform Docs</a>
- <a href="https://docs.anthropic.com/" target="_blank">Anthropic Documentation</a>
