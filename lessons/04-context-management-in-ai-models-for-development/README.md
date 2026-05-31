# 04. Gestión del contexto en modelos de IA para desarrollo

- [Introducción](#introducción)
- [Qué significa contexto en desarrollo asistido por IA](#qué-significa-contexto-en-desarrollo-asistido-por-ia)
- [Estrategias para seleccionar y estructurar el contexto](#estrategias-para-seleccionar-y-estructurar-el-contexto)
- [Técnicas de prompting aplicadas al trabajo de desarrollo](#técnicas-de-prompting-aplicadas-al-trabajo-de-desarrollo)
- [Iteración con IA y mantenimiento del hilo de trabajo](#iteración-con-ia-y-mantenimiento-del-hilo-de-trabajo)
- [Anti-patrones frecuentes en prompting y gestión del contexto](#anti-patrones-frecuentes-en-prompting-y-gestión-del-contexto)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección aprenderás a trabajar con el contexto como un recurso limitado y estratégico cuando usas modelos de IA para programar. Verás cómo estructurar la información, cómo iterar sin perder precisión y qué anti-patrones deterioran la calidad de las respuestas. El objetivo no es solo pedir mejor, sino diseñar conversaciones de trabajo más útiles, reproducibles y seguras.

## Qué significa contexto en desarrollo asistido por IA
En modelos de IA, el contexto es el conjunto de instrucciones, fragmentos de código, archivos, restricciones y mensajes previos que el modelo usa para responder. No es solo “lo último que escribes”, sino todo lo que condiciona la salida en una interacción concreta.

En desarrollo, el contexto puede incluir requisitos funcionales, estructura del proyecto, convenciones del equipo, errores observados y objetivos de una tarea. Cuanto más relevante y mejor organizado esté, más probable es obtener respuestas útiles y alineadas con el problema real.

Un contexto pobre genera resultados genéricos, inconsistentes o directamente incorrectos. Un contexto excesivo, en cambio, puede diluir lo importante, introducir ruido y hacer que el modelo preste atención a detalles secundarios.

Gestionar contexto significa decidir qué información entra, en qué orden aparece y cómo se mantiene durante la iteración. Esa habilidad separa un uso casual de la IA de un uso profesional dentro del flujo de desarrollo.
## Estrategias para seleccionar y estructurar el contexto
La primera estrategia consiste en aportar solo la información necesaria para la tarea actual. Si quieres refactorizar una función, normalmente no hace falta pegar todo el repositorio, sino el fragmento afectado, su contrato esperado y una breve descripción del comportamiento deseado.

También conviene separar el contexto en capas: objetivo, restricciones, material de entrada y formato de salida esperado. Esa estructura ayuda al modelo a distinguir entre lo que debe hacer, lo que no puede romper y qué artefacto debe devolver.

Un patrón muy útil es explicitar el entorno técnico de forma breve y concreta. Por ejemplo, versión del lenguaje, framework, estilo de pruebas, convención de nombres o limitaciones de seguridad.

Cuando el problema crece, es preferible resumir antes que acumular mensajes largos. Un buen resumen operativo mantiene decisiones previas, estado actual y siguiente paso, evitando que la conversación se degrade con el tiempo.
## Técnicas de prompting aplicadas al trabajo de desarrollo
Un prompt eficaz en desarrollo suele combinar contexto, tarea, criterios de calidad y formato de respuesta. No basta con pedir “haz esto mejor”; es más útil pedir “refactoriza esta función para mejorar legibilidad, sin cambiar comportamiento, y devuelve código más explicación breve de los cambios”.

Otra técnica importante es pedir razonamiento operativo sin forzar cadenas internas extensas. En la práctica, funciona mejor solicitar validaciones concretas, supuestos detectados, riesgos y pasos de implementación o verificación.

También es valioso acotar el rol de la IA según la fase de trabajo. A veces necesitas un revisor crítico, otras un generador de tests, otras un ayudante para diagnosticar un bug con hipótesis priorizadas.

Finalmente, conviene pedir respuestas accionables y verificables. En lugar de una explicación abstracta, solicita diff sugerido, casos de prueba, comandos o checklist de validación para integrar la respuesta en tu flujo real.
## Iteración con IA y mantenimiento del hilo de trabajo
La interacción con IA rara vez termina en un único prompt. Lo habitual es trabajar por ciclos: pedir una propuesta, revisar, corregir supuestos, aportar datos nuevos y refinar hasta llegar a una solución aceptable.

Para que esa iteración sea eficiente, cada vuelta debe introducir una corrección clara. Si una respuesta falla, indica qué parte no sirve, qué restricción se incumplió y qué debe preservarse en la siguiente versión.

Cuando una conversación se alarga, conviene reencuadrar el estado actual con un resumen corto. Ese resumen puede incluir objetivo, decisiones tomadas, errores detectados y criterio exacto para el siguiente intento.

Esta práctica reduce derivas, evita contradicciones y mejora la reproducibilidad. Además, facilita retomar una tarea más tarde o transferir el trabajo a otra persona del equipo.
## Anti-patrones frecuentes en prompting y gestión del contexto
Uno de los anti-patrones más comunes es pedir demasiado con demasiada ambigüedad. Prompts como “arregla esto” o “mejora el proyecto” suelen producir respuestas superficiales porque no fijan alcance, prioridad ni criterio de éxito.

Otro error habitual es mezclar instrucciones contradictorias. Por ejemplo, pedir una solución mínima, altamente escalable, sin dependencias, con cobertura completa y lista para producción en un solo paso puede empujar al modelo a compromisos poco realistas.

También falla con frecuencia la ausencia de contexto técnico clave. Si no indicas lenguaje, framework, versión o restricciones, el modelo completará huecos con supuestos que pueden no coincidir con tu proyecto.

Por último, es un anti-patrón aceptar la primera respuesta sin validación. La IA acelera el trabajo, pero no sustituye la revisión técnica, las pruebas ni el criterio de ingeniería.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank">OpenAI Prompt engineering guide</a>
- <a href="https://docs.anthropic.com/" target="_blank">Anthropic Prompt engineering overview</a>
- <a href="https://docs.github.com/" target="_blank">GitHub Docs</a>
