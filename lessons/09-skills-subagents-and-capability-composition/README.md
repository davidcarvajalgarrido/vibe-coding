# 09. Skills, subagentes y composición de capacidades

- [Introducción](#introducción)
- [De prompts aislados a capacidades reutilizables](#de-prompts-aislados-a-capacidades-reutilizables)
- [Qué es un subagente y cuándo tiene sentido usarlo](#qué-es-un-subagente-y-cuándo-tiene-sentido-usarlo)
- [Composición de capacidades en flujos de desarrollo](#composición-de-capacidades-en-flujos-de-desarrollo)
- [Diseñar contratos claros entre skills y agentes](#diseñar-contratos-claros-entre-skills-y-agentes)
- [Riesgos habituales y criterios de buen uso](#riesgos-habituales-y-criterios-de-buen-uso)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección veremos cómo estructurar el trabajo con IA más allá de un único prompt. Aprenderás a definir skills reutilizables, a separar responsabilidades en subagentes y a componer capacidades para resolver tareas de desarrollo con más control. El foco no está en delegar ciegamente, sino en diseñar flujos donde cada pieza tenga un propósito claro y verificable.

## De prompts aislados a capacidades reutilizables
Cuando una tarea se repite con frecuencia, conviene dejar de pensar en prompts sueltos y empezar a pensar en capacidades. Una skill es una instrucción reusable que encapsula contexto, objetivo, restricciones y formato de salida para una clase concreta de trabajo. En desarrollo, esto puede aplicarse a revisar PRs, generar tests, resumir incidencias o proponer refactors seguros. La ventaja principal es la consistencia: el equipo no depende de que cada persona recuerde siempre cómo pedir lo mismo. Además, una skill bien definida reduce ambigüedad y facilita evaluar si la salida cumple lo esperado.

Un ejemplo simple de skill para revisión de código podría definirse así:

Objetivo: revisar cambios en un módulo Python.
Criterios: detectar errores lógicos, riesgos de seguridad, problemas de legibilidad.
Salida: lista priorizada con hallazgo, impacto y recomendación.

La clave es que la skill no sustituye al criterio técnico del desarrollador. Más bien actúa como una plantilla operativa que acelera tareas repetibles y hace más estable el comportamiento de la IA.
## Qué es un subagente y cuándo tiene sentido usarlo
Un subagente es una unidad especializada a la que se le asigna una responsabilidad concreta dentro de un flujo mayor. En vez de pedir a una sola IA que haga todo a la vez, se divide el trabajo en roles como analista, implementador, revisor o generador de pruebas. Este enfoque mejora la trazabilidad porque cada salida puede inspeccionarse por separado. También ayuda a limitar contexto, algo importante cuando el problema es amplio o mezcla varias disciplinas.

Un reparto típico puede verse así:

Analista: aclara requisitos y riesgos.
Implementador: propone cambios de código.
Revisor: valida calidad, seguridad y mantenimiento.

Tiene sentido usar subagentes cuando la tarea es compleja, cuando interesa separar fases o cuando se quiere imponer un proceso más controlado. Para tareas pequeñas, esta estructura puede ser excesiva y añadir fricción innecesaria.
## Composición de capacidades en flujos de desarrollo
Componer capacidades significa encadenar skills y subagentes para resolver un objetivo mayor sin mezclar todas las instrucciones en un único bloque. Por ejemplo, ante una incidencia, un subagente puede resumir el bug, otro proponer hipótesis, otro generar una corrección y otro diseñar pruebas de regresión. Cada fase consume la salida de la anterior, pero con validaciones intermedias. Este diseño reduce errores por sobrecarga contextual y hace más fácil detectar en qué paso se degradó la calidad.

Un flujo sencillo podría representarse así:

Incidencia -> análisis -> propuesta de fix -> tests -> revisión final

En la práctica, la composición funciona mejor cuando cada etapa tiene entradas y salidas explícitas. Si no se define ese contrato, los subagentes tienden a solaparse o a producir respuestas difíciles de integrar.
## Diseñar contratos claros entre skills y agentes
Para que varias capacidades colaboren bien, cada una debe operar con un contrato claro. Ese contrato incluye qué recibe, qué transforma, qué no debe hacer y cómo debe devolver el resultado. En entornos de desarrollo, esto evita que una IA modifique archivos no previstos, cambie arquitectura sin autorización o mezcle análisis con implementación. El contrato también permite automatizar validaciones sobre la salida antes de pasar al siguiente paso.

Un contrato útil puede incluir campos como estos:

Entrada: diff, archivo o requisito.
Restricciones: no cambiar API pública.
Salida: JSON o lista estructurada con acciones propuestas.

Cuanto más concreta sea la interfaz entre capacidades, más fácil será reutilizarlas en distintos proyectos. La composición deja entonces de ser improvisada y pasa a parecerse a un diseño de software modular.
## Riesgos habituales y criterios de buen uso
El principal riesgo al trabajar con skills y subagentes es confundir estructura con fiabilidad. Dividir una tarea en varias piezas no garantiza que el resultado sea correcto, así que sigue siendo necesario validar código, pruebas y supuestos. Otro problema frecuente es crear demasiadas capas para tareas simples, lo que consume tiempo y tokens sin aportar valor real. También puede aparecer deriva entre agentes si cada uno interpreta el objetivo con criterios distintos.

Como regla práctica, conviene empezar con pocas capacidades y añadir especialización solo cuando exista una necesidad observable. Una buena composición reduce carga cognitiva, mejora control y deja evidencias revisables. Si ocurre lo contrario, probablemente el diseño está sobredimensionado y debe simplificarse.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.anthropic.com/" target="_blank">Anthropic Documentation</a>
- <a href="https://platform.openai.com/docs" target="_blank">OpenAI Platform Docs</a>
- <a href="https://docs.github.com/en/copilot" target="_blank">GitHub Copilot Docs</a>
