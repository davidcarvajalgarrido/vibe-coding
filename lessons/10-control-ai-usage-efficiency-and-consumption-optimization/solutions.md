# Lección 10 — Soluciones

## Ejercicio 1: Solución: Clasificar usos permitidos y restringidos

Ejemplo de usos recomendables:
- Generación de tests unitarios para funciones existentes.
- Propuesta de refactorizaciones locales con criterio de aceptación claro.
- Redacción de documentación técnica interna sin datos sensibles.

Ejemplo de usos restringidos:
- Pegar secretos, tokens o credenciales en prompts.
- Enviar código propietario completo sin aprobación ni control.
- Solicitar decisiones arquitectónicas finales sin revisión humana.

Reglas breves:
- "La IA puede proponer código, pero toda salida debe revisarse antes de integrarse."
- "No se permite compartir credenciales, datos personales ni información contractual."
- "Las decisiones de diseño final requieren validación explícita del responsable técnico."

## Ejercicio 2: Solución: Detectar ineficiencias de consumo

Ejemplo de análisis:
- Sobró: dos archivos completos que no afectaban al bug.
- Faltó: mensaje de error exacto y comportamiento esperado.
- Se repitió: contexto del proyecto en tres prompts consecutivos.

Mejoras propuestas:
- Enviar solo la función afectada, el stack trace y el resultado esperado.
- Preparar un prompt base reutilizable con contexto estable y añadir solo el cambio puntual.

Resultado esperado: menos tokens enviados, respuestas más precisas y menos iteraciones innecesarias.

## Ejercicio 3: Solución: Diseñar métricas mínimas

Ejemplo de métricas:
- Coste por equipo: permite detectar desviaciones de consumo.
- Tasa de aceptación de sugerencias: muestra utilidad real de la herramienta.
- Retrabajo posterior: ayuda a medir calidad de la salida generada.
- Tiempo ahorrado estimado por tarea: conecta uso con productividad.

Revisión sugerida:
- Semanal: coste por equipo y tasa de aceptación.
- Mensual: retrabajo posterior y tiempo ahorrado estimado.

Resultado esperado: disponer de señales simples para ajustar prácticas sin burocracia excesiva.

## Ejercicio 4: Solución: Elegir herramienta según tarea

Ejemplo de asignación:
- Autocompletado: asistente integrado en editor, priorizando velocidad.
- Refactor local: modelo con buen contexto de código, priorizando calidad.
- Documentación técnica: modelo generalista, priorizando coste moderado.
- Análisis de un problema complejo: modelo más capaz, priorizando calidad sobre latencia.

La lógica es no usar siempre la opción más potente. Las tareas frecuentes y simples deben resolverse con herramientas rápidas y baratas, reservando modelos más costosos para casos de mayor ambigüedad o impacto.

## Ejercicio 5: Solución: Redactar una política operativa breve

Ejemplo de política:
"El equipo usará únicamente herramientas de IA aprobadas por la organización.
No se compartirán credenciales, datos personales, secretos ni código sensible sin autorización explícita.
La IA podrá emplearse para soporte de desarrollo, documentación, testing y refactorizaciones acotadas.
Toda salida generada deberá ser revisada, validada y versionada por una persona responsable.
Las prácticas y métricas de uso se revisarán mensualmente para ajustar coste, riesgo y utilidad."

Resultado esperado: una norma corta, clara y aplicable en el trabajo diario.
