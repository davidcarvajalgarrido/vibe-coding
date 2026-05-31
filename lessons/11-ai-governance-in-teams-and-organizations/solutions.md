# Lección 11 — Soluciones

## Ejercicio 1: Solución: Clasificar casos de uso por nivel de riesgo

Un ejemplo válido sería el siguiente:

use_cases:
  low:
    case: "Generación de documentación técnica interna"
    controls:
      - "revisión del autor"
      - "verificación de exactitud antes de publicar"
  medium:
    case: "Refactorización de utilidades compartidas"
    controls:
      - "peer review"
      - "ejecución de tests automáticos"
  high:
    case: "Generación de código para un servicio con datos personales"
    controls:
      - "security review"
      - "aprobación de líder técnico"

El resultado esperado es una clasificación coherente donde el nivel de control aumenta con el impacto del caso de uso.

## Ejercicio 2: Solución: Diseñar una política mínima de entradas prohibidas

Una propuesta operativa podría ser esta:

forbidden_inputs:
  - type: "credenciales y tokens"
    reason: "permiten acceso no autorizado a sistemas"
  - type: "datos personales identificables"
    reason: "pueden vulnerar obligaciones legales y de privacidad"
  - type: "código con restricciones contractuales"
    reason: "puede incumplir acuerdos con clientes o proveedores"
  - type: "secretos de negocio no publicados"
    reason: "expone información estratégica"
  - type: "incidentes o vulnerabilidades no divulgadas"
    reason: "aumenta el riesgo de filtración"

El estado final esperado es una lista clara y reutilizable en una guía interna o política de uso.

## Ejercicio 3: Solución: Proponer un flujo de aprobación de herramientas

Un flujo simple y realista podría definirse así:

approval_flow:
  - stage: "evaluación inicial"
    owner: "líder técnico"
    check: "caso de uso, productividad esperada y encaje técnico"
  - stage: "revisión de riesgo"
    owner: "seguridad y/o compliance"
    check: "tratamiento de datos, contratos, controles disponibles"
  - stage: "piloto controlado"
    owner: "equipo piloto"
    check: "coste, adopción, incidencias y valor real"

rejection_criterion: "la herramienta requiere enviar datos sensibles sin controles aceptables"

El resultado esperado es un proceso breve, con responsables claros y una condición explícita de no aprobación.

## Ejercicio 4: Solución: Definir evidencias de trazabilidad

Un ejemplo de respuesta sería:

traceability:
  - scenario: "Generación de código para un módulo regulado"
    evidence:
      - "herramienta y versión utilizadas"
      - "resumen del prompt o contexto"
      - "resultado de revisión humana"
      - "evidencia de tests y validaciones"
  - scenario: "Análisis asistido de una incidencia crítica"
    evidence:
      - "consulta realizada"
      - "recomendación generada por la IA"
      - "decisión final del equipo"
      - "acciones ejecutadas"

Estas evidencias permiten reconstruir qué se hizo, con qué apoyo y qué controles se aplicaron durante una auditoría interna.

## Ejercicio 5: Solución: Redactar una norma de revisión humana

Una norma válida podría redactarse así:

review_rule:
  statement: "Todo código generado o modificado con apoyo de IA debe ser revisado por una persona antes de integrarse."
  simple_review_when:
    - "cambios menores"
    - "documentación o tests no críticos"
  reinforced_review_when:
    - "lógica de negocio"
    - "acceso a datos sensibles"
    - "cambios de arquitectura o seguridad"
  acceptance_criteria:
    - "el código compila o pasa CI"
    - "los tests relevantes pasan"
    - "la persona revisora entiende y acepta el cambio"

El resultado esperado es una regla aplicable, verificable y fácil de incorporar al flujo de desarrollo.
