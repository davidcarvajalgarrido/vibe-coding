# 08. Buenas prácticas, riesgos, validación y seguridad en código asistido por IA

- [Introducción](#introducción)
- [La IA como acelerador, no como criterio de verdad](#la-ia-como-acelerador-no-como-criterio-de-verdad)
- [Validación técnica del código generado](#validación-técnica-del-código-generado)
- [Riesgos habituales en desarrollo asistido por IA](#riesgos-habituales-en-desarrollo-asistido-por-ia)
- [Seguridad, privacidad y exposición de información](#seguridad-privacidad-y-exposición-de-información)
- [Buenas prácticas operativas para equipos](#buenas-prácticas-operativas-para-equipos)
- [Checklist práctico antes de aceptar una propuesta de IA](#checklist-práctico-antes-de-aceptar-una-propuesta-de-ia)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección trabajaremos una idea central del desarrollo asistido por IA: generar código rápido no equivale a generar código correcto, seguro ni mantenible. Veremos cómo validar lo producido, qué riesgos aparecen al delegar tareas en modelos y qué prácticas ayudan a integrar la IA con criterio profesional. El objetivo no es desconfiar de la herramienta, sino usarla con control técnico, trazabilidad y responsabilidad.

## La IA como acelerador, no como criterio de verdad
Un error frecuente en vibe coding es asumir que una respuesta fluida y bien escrita implica calidad técnica. Los modelos generan código plausible, pero no verifican por sí mismos si encaja con la arquitectura, si cumple requisitos no funcionales o si introduce deuda técnica.

Por eso, la buena práctica básica es tratar toda salida de IA como un borrador avanzado. El desarrollador sigue siendo responsable de revisar decisiones, detectar lagunas y validar que la solución resuelve el problema real sin efectos secundarios.

En equipos maduros, la IA se incorpora como apoyo dentro de un proceso con revisiones, pruebas y criterios explícitos. Esa disciplina evita que la velocidad inicial se convierta después en retrabajo, incidencias o vulnerabilidades.
## Validación técnica del código generado
Validar código asistido por IA significa comprobar comportamiento, legibilidad, integración y mantenibilidad. No basta con que compile o parezca correcto; hay que revisar entradas límite, manejo de errores, nombres, complejidad y coherencia con el estilo del proyecto.

Una forma práctica de pedir ayuda a la IA es exigirle criterios de verificación además de implementación. Por ejemplo, se puede solicitar una propuesta con casos de prueba, supuestos explícitos y posibles riesgos de la solución.

Antes de aceptar cambios, conviene contrastar el resultado con tests automáticos, linters y revisión humana. Si el código toca lógica crítica, autenticación, datos sensibles o concurrencia, la validación debe ser todavía más estricta.

Ejemplo de prompt útil:

Solicita una implementación en Python para validar emails, pero incluye también casos límite, supuestos, posibles fallos y una lista de pruebas unitarias mínimas.
## Riesgos habituales en desarrollo asistido por IA
Los riesgos más comunes no suelen venir de errores espectaculares, sino de pequeños fallos plausibles: funciones inventadas, uso incorrecto de librerías, dependencias obsoletas, complejidad innecesaria o interpretaciones ambiguas del requisito. Como el resultado parece convincente, el sesgo de confianza aumenta.

También aparece el riesgo de degradación del criterio técnico cuando el equipo acepta sugerencias sin discutirlas. Si se delega demasiado, disminuye la comprensión del sistema y se vuelve más difícil mantenerlo o depurarlo después.

Otro riesgo importante es la contaminación del contexto. Si el prompt mezcla requisitos, ejemplos viejos y decisiones contradictorias, la IA tenderá a producir una solución inconsistente que parece coherente solo a primera vista.
## Seguridad, privacidad y exposición de información
Al usar IA en desarrollo, la seguridad no se limita al código generado; también afecta a lo que se comparte con la herramienta. Pegar fragmentos con secretos, datos reales, lógica sensible o información contractual puede crear problemas de cumplimiento, privacidad o propiedad intelectual.

La práctica recomendada es minimizar el dato enviado y anonimizar siempre que sea posible. En lugar de compartir credenciales, nombres de clientes o dumps completos, conviene sustituirlos por placeholders y describir el problema con el menor contexto sensible necesario.

También hay que revisar el resultado desde una perspectiva de seguridad aplicada. Si la IA propone consultas SQL, manejo de ficheros, autenticación o consumo de APIs, se debe comprobar explícitamente que no haya inyección, exposición de errores, validación insuficiente o permisos excesivos.

Ejemplo de dato seguro para compartir:

API_KEY="REDACTED"
CUSTOMER_NAME="CLIENT_X"
DB_HOST="internal-host-redacted"
## Buenas prácticas operativas para equipos
En un entorno profesional, las buenas prácticas deben convertirse en hábitos repetibles. Es útil definir qué tipos de tareas se pueden delegar a IA, qué revisiones son obligatorias y qué cambios requieren validación adicional por criticidad.

También conviene registrar de forma ligera cuándo una solución fue generada o refinada con IA, especialmente en piezas delicadas. No se trata de burocracia, sino de facilitar trazabilidad, auditoría técnica y aprendizaje del equipo.

Una política simple y efectiva puede incluir: no subir secretos al prompt, revisar siempre dependencias sugeridas, ejecutar tests antes de integrar y exigir revisión humana en módulos críticos. Con esas reglas mínimas, la IA pasa de ser una fuente de riesgo difuso a una herramienta gobernada.
## Checklist práctico antes de aceptar una propuesta de IA
Un buen enfoque final es usar una checklist breve antes de incorporar código generado. Esa lista debe obligar a pensar en corrección funcional, seguridad, legibilidad, alineación con el proyecto y coste futuro de mantenimiento.

La checklist no sustituye al criterio técnico, pero reduce errores por prisa o exceso de confianza. En especial, ayuda mucho cuando se trabaja con iteraciones rápidas y varias sugerencias consecutivas del asistente.

Un ejemplo de checklist útil sería este:

- ¿Resuelve exactamente el requisito?
- ¿Pasa tests y linters?
- ¿Introduce dependencias innecesarias?
- ¿Expone datos, secretos o lógica sensible?
- ¿Se entiende y mantiene con facilidad?


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://owasp.org/www-project-top-ten/" target="_blank">OWASP Top 10</a>
- <a href="https://docs.github.com/en/copilot/responsible-use-of-github-copilot" target="_blank">GitHub Docs - Responsible use of GitHub Copilot</a>
- <a href="https://docs.anthropic.com/" target="_blank">Anthropic Documentation</a>
