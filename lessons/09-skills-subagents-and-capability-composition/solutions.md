# Lección 9 — Soluciones

## Ejercicio 1: Solución: definir una skill de revisión de código

Una posible skill sería esta:

Objetivo: revisar cambios en un archivo backend Python antes de merge.
Criterios: errores lógicos, riesgos de seguridad, legibilidad y mantenibilidad.
Salida: tabla con hallazgo, severidad, línea o zona afectada y recomendación.

El resultado esperado es una revisión estructurada que otra persona pueda comprobar directamente sobre el diff o el archivo analizado.

## Ejercicio 2: Solución: separar una tarea en subagentes

Una división válida sería:

Subagente 1, analista de bug: identifica causa probable, alcance y riesgos.
Subagente 2, implementador: propone el cambio mínimo necesario para corregirlo.
Subagente 3, tester: diseña pruebas de regresión y casos límite.

Cada uno entrega un artefacto distinto: diagnóstico, propuesta de cambio y conjunto de pruebas.

## Ejercicio 3: Solución: diseñar un flujo compuesto

Un flujo razonable sería:

Etapa 1: análisis de requisito -> salida, criterios de aceptación.
Etapa 2: propuesta técnica -> salida, plan de implementación.
Etapa 3: implementación -> salida, diff o archivos modificados.
Etapa 4: pruebas y revisión -> salida, validación final.

El punto de control intermedio puede situarse entre la etapa 2 y 3 para aprobar el enfoque antes de tocar código.

## Ejercicio 4: Solución: redactar un contrato de salida

Un contrato útil podría ser:

Entrada: archivo o diff del módulo.
Puede cambiar: nombres internos, duplicación, estructura local.
No puede cambiar: API pública, contratos externos, comportamiento funcional esperado.
Salida: lista JSON con cambio propuesto, motivo, riesgo y validación necesaria.

El resultado esperado es una propuesta de refactor que pueda revisarse sin ambigüedad.

## Ejercicio 5: Solución: detectar sobreingeniería

Una tarea simple puede ser renombrar una variable confusa y ajustar su uso en un archivo pequeño. En ese caso, usar cuatro subagentes añade coordinación, coste y contexto sin mejorar apenas la calidad. Una versión simplificada sería usar una sola skill de refactor ligero con validación posterior del desarrollador. El estado final esperado es un cambio pequeño, claro y revisado manualmente.
