# Lección 8 — Soluciones

## Ejercicio 1: Solución: Detectar riesgos en una propuesta de IA

Riesgos posibles:
- Dependencia no validada o poco mantenida.
- Captura genérica de excepciones que oculta errores reales.
- Dificultad para depurar porque se pierde contexto del fallo.

Feedback breve:
"Antes de integrar esta propuesta, necesito validar la librería sugerida, reemplazar `except Exception` por manejo específico de errores y añadir pruebas que cubran fallos esperables. Tal como está, la solución puede ocultar incidencias y complicar el mantenimiento."

## Ejercicio 2: Solución: Redactar un prompt orientado a validación

Un prompt válido sería:

Implementa en Python una función para procesar un CSV de usuarios.
Incluye supuestos explícitos, validación de entradas y manejo de errores.
Añade casos límite relevantes y una lista mínima de pruebas unitarias.
No uses librerías externas salvo que lo justifiques.

Resultado esperado: la IA no solo propone código, sino también criterios para revisarlo.

## Ejercicio 3: Solución: Sanitizar contexto sensible

Una versión segura del contexto sería:

"Conecta a una base de datos PostgreSQL usando credenciales ya configuradas en variables de entorno y corrige un bug en un reporte de cliente. El problema está en la generación de resultados agregados y no es necesario usar datos reales."

Resultado esperado: se preserva el objetivo técnico sin exponer usuario, contraseña, host ni nombre real del cliente.

## Ejercicio 4: Solución: Aplicar una checklist de aceptación

Ejemplo de checklist:
- ¿Cumple exactamente el requisito funcional?
- ¿Pasa tests y validaciones automáticas?
- ¿Evita exponer secretos o datos sensibles?
- ¿Se entiende con facilidad y sigue el estilo del proyecto?
- ¿Añade solo dependencias justificadas?

Resultado esperado: una revisión breve, repetible y útil antes de hacer merge.

## Ejercicio 5: Solución: Diseñar una política mínima de uso responsable

Ejemplo de política:
- Nunca se comparten secretos, credenciales ni datos reales en prompts.
- Todo código generado por IA debe ser revisado por una persona antes de integrarse.
- Los módulos críticos requieren tests y revisión adicional obligatoria.
- Toda dependencia sugerida por IA debe validarse antes de aprobarse.

Resultado esperado: reglas simples, auditables y fáciles de aplicar en el trabajo diario.
