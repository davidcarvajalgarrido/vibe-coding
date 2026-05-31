# Lección 12 — Soluciones

## Ejercicio 1: Solución: Clasificar herramientas por categoría

Una clasificación correcta sería la siguiente:

GitHub Copilot: asistencia inline.
Claude: asistente conversacional.
OpenAI API: plataforma/modelo para integración.
Ollama: solución local para ejecutar modelos.
LangChain: framework de orquestación y gestión de flujos.

La justificación se basa en su función dominante. Copilot trabaja dentro del editor; Claude se usa mucho para conversación y razonamiento; OpenAI API permite construir soluciones sobre modelos; Ollama facilita ejecución local; LangChain ayuda a encadenar contexto, herramientas y pasos.

## Ejercicio 2: Solución: Elegir entre cloud y local

Para ese escenario, la mejor respuesta suele ser una estrategia híbrida con fuerte sesgo a local o entorno controlado. El primer argumento técnico es la reducción de exposición de código sensible fuera de la infraestructura propia. El segundo es la posibilidad de controlar mejor qué modelos, registros y flujos se ejecutan.

El argumento organizativo es el cumplimiento de políticas internas y auditoría. El estado final esperado es una decisión justificada así: cloud solo para tareas no sensibles o entornos aprobados, y local para repositorios críticos.

## Ejercicio 3: Solución: Definir criterios de selección

Un conjunto razonable de criterios sería:

1. Seguridad y privacidad.
2. Calidad de las respuestas o del código generado.
3. Integración con el flujo de trabajo.
4. Coste total de adopción.
5. Facilidad de gobernanza y soporte.

El criterio más importante es seguridad y privacidad cuando la herramienta accede a repositorios, documentación interna o fragmentos de código propietarios. El resultado esperado es una lista priorizada coherente con el contexto del equipo, no una lista genérica sin orden.

## Ejercicio 4: Solución: Construir una mini matriz de decisión

Un ejemplo simple podría ser este:

herramienta | integración IDE | contexto largo | privacidad | coste inicial
GitHub Copilot | alta | media | media | bajo
Claude | media | alta | media | medio

Para un equipo pequeño centrado en productividad diaria dentro del editor, elegiría GitHub Copilot. Para un equipo que necesita más análisis, diseño y trabajo conversacional sobre problemas complejos, Claude podría complementar o incluso ser prioritario según el caso.

## Ejercicio 5: Solución: Diseñar un stack mínimo de adopción

Un stack inicial razonable sería:

1. GitHub Copilot como herramienta de edición y sugerencias inline.
2. Claude como herramienta conversacional para análisis, refactorización y debugging guiado.
3. Una política de uso híbrido, con cloud para tareas generales y alternativa local evaluada para código sensible.

El rol de cada pieza queda así: Copilot acelera el trabajo fino en el IDE, Claude ayuda en tareas de mayor contexto y la política de despliegue define límites de seguridad y gobierno. El estado final esperado es un stack pequeño, entendible y fácil de pilotar.
