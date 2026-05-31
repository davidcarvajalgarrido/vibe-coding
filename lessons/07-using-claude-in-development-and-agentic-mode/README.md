# 07. Uso de Claude en desarrollo y trabajo en modo agentic

- [Introducción](#introducción)
- [Claude como herramienta de desarrollo](#claude-como-herramienta-de-desarrollo)
- [Qué significa trabajar en modo agentic](#qué-significa-trabajar-en-modo-agentic)
- [Gestión avanzada del contexto](#gestión-avanzada-del-contexto)
- [Patrones prácticos de uso con Claude](#patrones-prácticos-de-uso-con-claude)
- [Capacidades orientadas al diseño y la especificación](#capacidades-orientadas-al-diseño-y-la-especificación)
- [Riesgos, límites y supervisión efectiva](#riesgos-límites-y-supervisión-efectiva)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección aprenderás a utilizar Claude como asistente de desarrollo más allá de la simple generación de código. Veremos cómo estructurar el contexto, cómo delegar tareas de forma controlada y qué implica trabajar en un modo agentic sin perder supervisión técnica. El objetivo no es automatizar a ciegas, sino aumentar capacidad manteniendo criterio, trazabilidad y calidad.

## Claude como herramienta de desarrollo
Claude puede utilizarse como asistente de análisis, redacción técnica, generación de código, revisión y apoyo en diseño de soluciones. Su valor aumenta cuando se le entrega contexto claro sobre el proyecto, restricciones, estilo de código y objetivo de la tarea.

En un uso intermedio, no se trata solo de pedir “hazme esta función”, sino de encargar subtareas con criterios de aceptación. Eso permite obtener respuestas más útiles, menos genéricas y más alineadas con el trabajo real del equipo.

Un patrón habitual consiste en combinar explicación y ejecución: primero se pide análisis, luego propuesta y después implementación. Esa secuencia reduce errores porque obliga al modelo a explicitar supuestos antes de producir cambios.

El desarrollador sigue siendo responsable de validar, integrar y corregir. Claude acelera el trabajo, pero no sustituye la comprensión del sistema ni la toma de decisiones técnicas.
## Qué significa trabajar en modo agentic
Trabajar en modo agentic implica usar la IA como un agente que recibe un objetivo, opera sobre un contexto y propone una secuencia de acciones para alcanzarlo. No es magia ni autonomía total, sino una forma de delegación guiada con supervisión humana.

En desarrollo, este enfoque es útil para tareas amplias como explorar una base de código, localizar causas probables de un bug o plantear un plan de refactorización. La clave está en definir límites, entregables y criterios de revisión antes de aceptar resultados.

Un flujo agentic bien diseñado divide el trabajo en pasos observables. Por ejemplo, primero inspeccionar archivos, luego resumir hallazgos, después proponer cambios y finalmente generar un parche o fragmento concreto.

Cuanto más abierta es la tarea, más importante es pedir checkpoints. Eso evita que el modelo avance demasiado con supuestos erróneos o con cambios que no encajan en la arquitectura existente.
## Gestión avanzada del contexto
Claude responde mejor cuando el contexto está curado y priorizado. No conviene volcar todo el repositorio sin criterio, sino seleccionar archivos relevantes, describir el problema y aclarar qué partes son fuente de verdad.

Una buena práctica es separar el contexto en capas: objetivo, restricciones, estado actual y artefactos de apoyo. Así el modelo entiende qué debe resolver, qué no puede romper y dónde mirar para fundamentar su respuesta.

También conviene indicar el nivel de intervención esperado. No es lo mismo pedir una hipótesis de debugging que una implementación completa con tests y explicación del impacto.

Cuando el contexto cambia durante la conversación, hay que reanclarlo. Un breve resumen de decisiones previas y del siguiente paso ayuda a mantener coherencia y reduce deriva en respuestas largas.
## Patrones prácticos de uso con Claude
Un patrón muy útil es “analiza antes de codificar”. Primero se pide a Claude que identifique riesgos, dependencias y posibles enfoques, y solo después se le solicita código con una dirección ya acordada.

Otro patrón frecuente es la revisión guiada. En lugar de preguntar “¿está bien este código?”, resulta mejor pedir una revisión con foco concreto: seguridad, legibilidad, complejidad o cobertura de casos borde.

En tareas de debugging, Claude funciona mejor si recibe síntomas observables, logs, pasos de reproducción y fragmentos relevantes. Si además se le pide ordenar hipótesis por probabilidad, la respuesta suele ser más operativa.

Para refactorización, conviene pedir cambios incrementales. Un buen prompt solicita primero un plan por fases y luego la implementación de una sola fase con explicación del antes y el después.
## Capacidades orientadas al diseño y la especificación
Claude también puede aportar valor en etapas previas al código, como diseño de componentes, definición de contratos o redacción de criterios de aceptación. Esto es especialmente útil cuando el equipo necesita convertir ideas difusas en especificaciones trabajables.

En este contexto, el modelo puede ayudar a comparar alternativas, detectar ambigüedades y proponer estructuras iniciales para APIs, módulos o flujos de usuario. Su utilidad aumenta si se le pide justificar decisiones y explicitar trade-offs.

Una práctica recomendable es usarlo para producir artefactos intermedios: resúmenes de requisitos, listas de decisiones pendientes o borradores de documentación técnica. Esos artefactos mejoran la coordinación y facilitan iteraciones posteriores.

Aun así, diseño asistido no significa diseño delegado. La validación con criterios de negocio, arquitectura y mantenibilidad sigue siendo responsabilidad del equipo.
## Riesgos, límites y supervisión efectiva
En modo agentic, el principal riesgo es confundir fluidez con fiabilidad. Una respuesta bien redactada puede contener supuestos falsos, omisiones importantes o cambios técnicamente correctos pero inadecuados para el sistema.

Por eso, toda salida relevante debe revisarse con evidencias: lectura de código, ejecución local, tests y contraste con la arquitectura real. La IA puede proponer, pero no certificar por sí sola que algo es correcto para producción.

También hay que cuidar la privacidad y el alcance del contexto compartido. Antes de enviar código, logs o datos, conviene aplicar las políticas de la organización y evitar exponer información sensible innecesaria.

La supervisión efectiva combina prompts claros, iteraciones cortas y validación técnica constante. Ese equilibrio es el que convierte a Claude en una herramienta útil en lugar de una fuente de ruido elegante.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.anthropic.com/" target="_blank">Anthropic Documentation</a>
- <a href="https://docs.anthropic.com/en/api/overview" target="_blank">Anthropic API Overview</a>
- <a href="https://claude.ai/" target="_blank">Claude</a>
