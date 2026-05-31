# Lección 3 — Ejercicios

## Ejercicio 1: Convertir un requisito difuso en criterios verificables

1. Toma este requisito: 'La búsqueda de productos debe funcionar bien incluso con errores del usuario'.
2. Redáctalo como 4 criterios verificables con precondición, acción y resultado esperado.
3. Pide a la IA que proponga 2 casos límite adicionales y revisa si son medibles.

## Ejercicio 2: Evaluar la calidad de un prompt de testing

1. Compara estos dos prompts: 'haz tests para este código' y 'genera 5 tests unitarios en pytest para validar errores de entrada y casos límite de esta función, sin usar mocks'.
2. Explica cuál producirá resultados más útiles y por qué.
3. Reescribe el primero para que sea apto para un entorno profesional.

## Ejercicio 3: Detectar debilidades en un test generado

1. Lee este test y señala dos problemas técnicos: `def test_login(client): assert login('a','b') is not None`.
2. Propón una versión mejor que valide comportamiento observable.
3. Indica qué riesgo cubre tu nueva prueba.

## Ejercicio 4: Diseñar una revisión técnica de tests con IA

1. Define una checklist de 5 puntos para revisar tests generados por IA.
2. Incluye al menos un criterio sobre relevancia, uno sobre estabilidad y uno sobre legibilidad.
3. Redáctala para que pueda usarse en una pull request.

## Ejercicio 5: Iterar sobre una suite existente

1. Imagina una suite con muchos mocks y asserts triviales.
2. Escribe un prompt para pedir a la IA que detecte 3 tests de poco valor y proponga mejoras.
3. Añade una instrucción para que priorice por riesgo funcional.
