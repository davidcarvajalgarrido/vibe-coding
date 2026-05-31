# Lección 3 — Soluciones

## Ejercicio 1: Solución: Convertir un requisito difuso en criterios verificables

Una posible transformación sería esta:

1. Precondición: existe un catálogo con productos llamados "teclado", "ratón" y "monitor". Acción: el usuario busca "tecldo". Resultado esperado: el sistema devuelve resultados relacionados o sugerencias relevantes.

2. Precondición: el catálogo contiene "cámara". Acción: el usuario busca "CAMARA". Resultado esperado: la búsqueda no falla por diferencias de mayúsculas y devuelve "cámara".

3. Precondición: hay productos activos en catálogo. Acción: el usuario introduce espacios extra antes y después del término. Resultado esperado: el sistema normaliza la entrada y devuelve resultados equivalentes a la búsqueda limpia.

4. Precondición: el sistema está operativo. Acción: el usuario busca una cadena sin coincidencias. Resultado esperado: se muestra respuesta vacía controlada o mensaje de no resultados, sin error técnico.

Casos límite adicionales razonables: búsqueda con caracteres especiales y búsqueda con término muy corto. Son medibles si se define claramente qué salida se considera correcta.

## Ejercicio 2: Solución: Evaluar la calidad de un prompt de testing

El segundo prompt producirá resultados más útiles porque define alcance, herramienta, intención y restricciones. Eso reduce ambigüedad y evita que la IA genere pruebas genéricas o acopladas a detalles irrelevantes.

Una reescritura profesional del primer prompt sería:

"Genera 5 tests unitarios en pytest para esta función. Cubre entradas válidas, errores de validación y al menos 2 casos límite. Evita mocks salvo que sean imprescindibles. Añade nombres descriptivos y una breve nota indicando qué comportamiento protege cada test."

Ese prompt mejora contexto, calidad esperada y criterio de revisión posterior.

## Ejercicio 3: Solución: Detectar debilidades en un test generado

Problemas del test original: no valida un comportamiento concreto y usa una aserción demasiado débil, porque cualquier objeto no nulo haría pasar la prueba. Además, no deja claro el escenario ni el resultado esperado.

Una versión mejor podría ser:

def test_login_rejects_invalid_credentials():
    result = login("usuario_invalido", "clave_erronea")
    assert result == {"status": "error", "message": "invalid credentials"}

El riesgo cubierto es que el sistema acepte credenciales incorrectas o devuelva una respuesta inconsistente ante un fallo de autenticación.

## Ejercicio 4: Solución: Diseñar una revisión técnica de tests con IA

Una checklist útil para pull request sería:

- ¿El test valida un comportamiento observable y relevante?
- ¿Cubre una regla de negocio, error frecuente o integración sensible?
- ¿Puede fallar de forma determinista sin depender de tiempo, red o estado oculto?
- ¿Usa mocks solo cuando son necesarios y no en exceso?
- ¿El nombre, los datos y las aserciones permiten entender rápidamente qué protege?

Esta checklist ayuda a filtrar tests sintácticamente correctos pero técnicamente pobres.

## Ejercicio 5: Solución: Iterar sobre una suite existente

Un prompt adecuado sería:

"Revisa esta suite de tests y detecta 3 pruebas de poco valor técnico. Prioriza por riesgo funcional y señala cuáles usan mocks excesivos, asserts triviales o validan detalles internos en lugar de comportamiento observable. Para cada caso, propone una versión mejorada y explica qué regresión real cubriría."

Con este prompt, la IA no solo critica la suite, sino que orienta la mejora hacia impacto funcional y mantenibilidad.
