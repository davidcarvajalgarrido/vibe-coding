# 11. Gobernanza del uso de IA en equipos y organizaciones

- [Introducción](#introducción)
- [Por qué la gobernanza importa](#por-qué-la-gobernanza-importa)
- [Principios de una política de uso responsable](#principios-de-una-política-de-uso-responsable)
- [Modelo operativo: roles, procesos y controles](#modelo-operativo-roles-procesos-y-controles)
- [Clasificación de riesgos y casos de uso](#clasificación-de-riesgos-y-casos-de-uso)
- [Auditoría, trazabilidad y mejora continua](#auditoría-trazabilidad-y-mejora-continua)
- [Adopción organizativa sin fricción innecesaria](#adopción-organizativa-sin-fricción-innecesaria)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección abordamos cómo pasar del uso individual de IA a un uso gobernado en equipos y organizaciones. La gobernanza no busca frenar la productividad, sino definir reglas, responsabilidades y controles para que el uso de asistentes, agentes y herramientas de generación sea seguro, auditable y alineado con los objetivos del negocio.

## Por qué la gobernanza importa
Cuando la IA entra en el flujo de desarrollo, también entran nuevos riesgos operativos, legales y de seguridad. Un equipo puede ganar velocidad con prompts, agentes y generación de código, pero sin reglas claras aparecen problemas de trazabilidad, exposición de datos y dependencia excesiva del modelo.

La gobernanza define cómo se usa la IA, para qué casos está permitida y qué controles deben aplicarse. No es un documento abstracto, sino un conjunto de decisiones prácticas sobre herramientas aprobadas, revisión humana, tratamiento de datos y registro de evidencias.

En un entorno intermedio o avanzado, la pregunta ya no es si usar IA, sino bajo qué condiciones. Esa diferencia separa una adopción improvisada de una adopción sostenible.
## Principios de una política de uso responsable
Una política útil suele apoyarse en principios simples: minimización de datos, revisión humana, transparencia de uso y responsabilidad clara sobre el resultado final. El desarrollador puede apoyarse en IA, pero no delega la responsabilidad técnica ni la validación del código entregado.

También conviene distinguir entre usos permitidos, restringidos y prohibidos. Por ejemplo, puede permitirse generar tests sobre código interno no sensible, restringirse el uso con datos de clientes y prohibirse pegar secretos, credenciales o información regulada en herramientas no autorizadas.

Un principio especialmente importante es el de proporcionalidad. No todas las tareas requieren el mismo nivel de control, y la política debe reflejar esa diferencia.
## Modelo operativo: roles, procesos y controles
La gobernanza necesita un modelo operativo para funcionar en el día a día. Esto implica asignar roles, como responsables de seguridad, líderes técnicos, equipos de plataforma y usuarios finales de las herramientas de IA.

Un proceso mínimo suele incluir evaluación de herramientas, clasificación de casos de uso, definición de controles y revisión periódica. Si una nueva herramienta entra en el equipo, no debería adoptarse solo por entusiasmo individual, sino tras una validación básica de riesgos, costes y compatibilidad.

Un ejemplo de control operativo puede documentarse así:

policy:
  approved_tools:
    - "GitHub Copilot Business"
    - "Claude Team"
  forbidden_inputs:
    - "secretos"
    - "datos personales no anonimizados"
    - "código sujeto a restricciones contractuales"
  mandatory_controls:
    - "revisión humana"
    - "análisis estático"
    - "registro del uso en tareas críticas"

Este tipo de definición no sustituye a la política formal, pero ayuda a convertirla en decisiones ejecutables.
## Clasificación de riesgos y casos de uso
No todos los usos de IA tienen el mismo impacto, por lo que conviene clasificarlos. Una práctica común es separar tareas de bajo riesgo, como generación de documentación interna, de tareas de riesgo medio o alto, como refactorizaciones extensas, acceso a repositorios sensibles o generación de lógica de negocio crítica.

Esta clasificación permite aplicar controles graduados. Un caso de bajo riesgo puede requerir solo revisión del autor, mientras que uno de riesgo alto puede exigir revisión por pares, validación de seguridad y registro explícito de qué herramienta se usó.

Un esquema sencillo puede representarse así:

risk_matrix:
  low:
    examples:
      - "documentación"
      - "tests básicos"
    controls:
      - "revisión del autor"
  medium:
    examples:
      - "refactorización"
      - "scripts internos"
    controls:
      - "peer review"
      - "tests automáticos"
  high:
    examples:
      - "código con datos sensibles"
      - "lógica crítica de negocio"
    controls:
      - "revisión senior"
      - "security review"
      - "evidencia de validación"

La clave no es hacer una matriz perfecta, sino una que sea comprensible y aplicable por el equipo.
## Auditoría, trazabilidad y mejora continua
Si la organización quiere gobernar el uso de IA, necesita visibilidad. Eso implica saber qué herramientas se usan, en qué contextos, con qué costes y con qué resultados, especialmente en procesos críticos o regulados.

La trazabilidad no exige registrar cada prompt de forma exhaustiva en todos los casos, pero sí definir cuándo debe conservarse evidencia. En tareas sensibles puede ser necesario guardar el contexto usado, las decisiones de revisión y los resultados de validación para fines de auditoría o aprendizaje interno.

La gobernanza madura no termina en la política inicial. Debe revisarse con métricas, incidentes detectados, cambios regulatorios y evolución de las herramientas disponibles.
## Adopción organizativa sin fricción innecesaria
Una política demasiado rígida suele empujar a los equipos a buscar atajos fuera del marco oficial. Por eso, gobernar bien significa combinar control con una experiencia de uso razonable, ofreciendo herramientas aprobadas, guías claras y soporte real para los casos frecuentes.

La formación también forma parte de la gobernanza. Los equipos deben entender no solo qué está permitido, sino por qué ciertas prácticas aumentan el riesgo y cómo trabajar de forma segura sin perder eficiencia.

La mejor señal de una buena gobernanza es que el equipo la percibe como una ayuda para decidir mejor, no como una barrera burocrática.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank">NIST AI Risk Management Framework</a>
- <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" target="_blank">OWASP Top 10 for LLM Applications</a>
- <a href="https://github.com/trust-center" target="_blank">GitHub Copilot Trust Center</a>
- <a href="https://www.iso.org/standard/81230.html" target="_blank">ISO/IEC 42001 overview</a>
