# 05. Técnicas de prompting, iteración y anti-patrones

- [Introducción](#introducción)
- [Del prompt aislado a la conversación de trabajo](#del-prompt-aislado-a-la-conversación-de-trabajo)
- [Anatomía de un prompt útil](#anatomía-de-un-prompt-útil)
- [Técnicas de prompting aplicadas al desarrollo](#técnicas-de-prompting-aplicadas-al-desarrollo)
- [Iteración efectiva: pedir, evaluar, corregir](#iteración-efectiva-pedir-evaluar-corregir)
- [Gestión de contexto durante la iteración](#gestión-de-contexto-durante-la-iteración)
- [Anti-patrones frecuentes en prompting](#anti-patrones-frecuentes-en-prompting)
- [Prompts reutilizables y disciplina operativa](#prompts-reutilizables-y-disciplina-operativa)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección profundizarás en cómo pedir mejor, iterar con criterio y reconocer patrones que degradan la calidad del trabajo con IA. El objetivo no es solo obtener respuestas más útiles, sino construir un diálogo técnico que reduzca ambigüedad, acelere validación y mejore el resultado final.

## Del prompt aislado a la conversación de trabajo
En un flujo intermedio de vibe coding, el prompt deja de ser una instrucción puntual y pasa a convertirse en una unidad de trabajo. Lo importante no es solo pedir algo, sino establecer objetivo, restricciones, contexto técnico y criterio de aceptación para que la IA pueda operar con menos ambigüedad.

Un buen prompt reduce el número de iteraciones inútiles, pero no elimina la necesidad de revisar. La calidad del resultado depende tanto de lo que se pide como del marco en el que se pide: stack, archivos implicados, convenciones del proyecto y nivel de profundidad esperado.

Por ejemplo, no es lo mismo pedir “haz un login” que situar el problema dentro de un backend Express con JWT, validación de entrada y pruebas mínimas.

Prompt pobre:

"Crea un login"

Prompt mejorado:

"Necesito implementar un endpoint POST /login en Express. Usa JWT, valida email y password, devuelve errores 400 y 401 cuando corresponda, y mantén el estilo del proyecto con funciones pequeñas. Incluye ejemplo de test con Jest."
## Anatomía de un prompt útil
Un prompt útil suele combinar cinco piezas: objetivo, contexto, restricciones, formato de salida y criterio de calidad. Esta estructura no tiene que ser rígida, pero ayuda a evitar respuestas genéricas o demasiado creativas cuando lo que se necesita es precisión.

El objetivo define qué problema resolver. El contexto sitúa a la IA dentro del proyecto real. Las restricciones limitan tecnologías, estilo o alcance. El formato de salida indica si quieres explicación, diff, código completo o pasos. El criterio de calidad fija cómo evaluar la respuesta.

Una plantilla simple puede servir como base para muchas tareas recurrentes.

Objetivo: refactorizar esta función.
Contexto: proyecto Node.js con TypeScript y ESLint estricto.
Restricciones: no cambiar la firma pública ni añadir dependencias.
Salida: propuesta de código y breve explicación.
Calidad: mejorar legibilidad y cubrir edge cases.
## Técnicas de prompting aplicadas al desarrollo
En desarrollo, algunas técnicas funcionan especialmente bien porque alinean la respuesta con tareas reales. Pedir a la IA que actúe sobre una base concreta, que compare opciones o que justifique decisiones suele producir mejores resultados que una petición abierta y abstracta.

Una técnica útil es acotar el rol operativo sin teatralizarlo. Otra es pedir transformación sobre artefactos existentes: refactoriza, explica, detecta riesgos, genera pruebas o propone un plan incremental. También funciona bien dividir una tarea compleja en subtareas verificables.

Por ejemplo, puedes guiar la respuesta hacia una secuencia controlada.

"Analiza esta función y responde en tres partes: 1) problemas detectados, 2) propuesta de refactor mínima, 3) tests necesarios para validar que no se rompe el comportamiento."
## Iteración efectiva: pedir, evaluar, corregir
Iterar bien no significa volver a preguntar lo mismo con otras palabras. Significa evaluar la salida, detectar qué falta y devolver feedback específico para acercar la siguiente respuesta al objetivo técnico.

La iteración efectiva suele seguir un ciclo corto: pedir una primera versión, revisar supuestos, corregir desviaciones y cerrar con validación. Si la respuesta falla, conviene señalar el problema exacto: cambió la API pública, introdujo dependencias no permitidas o no cubrió casos límite.

El feedback debe ser observable y accionable. En lugar de “no me convence”, es preferible algo como lo siguiente.

"La solución mejora la legibilidad, pero rompe compatibilidad porque cambia el nombre de la función exportada. Mantén la misma interfaz pública y añade tests para null y undefined."
## Gestión de contexto durante la iteración
A medida que la conversación crece, también crece el riesgo de arrastrar contexto obsoleto o contradictorio. Por eso conviene resumir decisiones, recordar restricciones vigentes y reinyectar solo la información necesaria cuando se cambia de tarea o de archivo.

Una práctica útil es consolidar el estado actual antes de seguir. Esto reduce malentendidos y evita que la IA continúe sobre supuestos ya descartados. También ayuda separar exploración y ejecución: primero se comparan opciones, luego se implementa una sola.

Un ejemplo de recapitulación breve puede ser suficiente para estabilizar el trabajo.

"Estado actual: mantenemos Express y TypeScript, no añadimos librerías, la validación será manual, y ya decidimos conservar la estructura de controladores y servicios. Ahora genera solo el código del servicio de autenticación."
## Anti-patrones frecuentes en prompting
Muchos problemas no vienen del modelo, sino de prompts mal planteados. Un anti-patrón habitual es pedir demasiado en una sola instrucción: diseñar, implementar, documentar, optimizar y probar a la vez. Otro es omitir restricciones críticas y esperar que la IA adivine el contexto del proyecto.

También es común aceptar respuestas plausibles sin contrastarlas, o iterar añadiendo ruido en lugar de precisión. Frases como “hazlo mejor”, “optimízalo” o “como antes pero bien” rara vez ayudan, porque no informan qué debe cambiar ni cómo medir la mejora.

Otro anti-patrón es delegar decisiones sensibles sin validación humana.

"Reescribe toda la arquitectura para que sea moderna"

Esa petición es demasiado vaga, no define criterios y abre la puerta a cambios innecesarios o incompatibles.
## Prompts reutilizables y disciplina operativa
En un entorno profesional conviene convertir los buenos prompts en plantillas reutilizables. Eso no significa mecanizar la conversación, sino estandarizar estructuras que ya han demostrado producir resultados más predecibles y auditables.

Una plantilla útil puede variar según la tarea: generación, refactorización, debugging o testing. Lo importante es que incluya contexto mínimo, límites claros y una salida fácil de revisar. Con el tiempo, estas plantillas se convierten en parte del método de trabajo del equipo.

Un ejemplo para debugging puede ser el siguiente.

"Analiza este error en una app React. Explica la causa probable, identifica el archivo más relevante, propone un cambio mínimo y sugiere cómo verificar la corrección manualmente y con test."


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.anthropic.com/" target="_blank">Anthropic Prompt Engineering Overview</a>
- <a href="https://platform.openai.com/docs" target="_blank">OpenAI Prompt Engineering</a>
- <a href="https://docs.github.com/" target="_blank">GitHub Docs</a>
