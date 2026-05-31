# 03. Testing asistido por IA y criterios de validación técnica

- [Introducción](#introducción)
- [El papel de la IA en testing](#el-papel-de-la-ia-en-testing)
- [Qué pedir a la IA y qué no delegar](#qué-pedir-a-la-ia-y-qué-no-delegar)
- [De requisitos ambiguos a casos verificables](#de-requisitos-ambiguos-a-casos-verificables)
- [Criterios de validación técnica](#criterios-de-validación-técnica)
- [Señales de tests débiles generados por IA](#señales-de-tests-débiles-generados-por-ia)
- [Iteración práctica con IA para mejorar una suite](#iteración-práctica-con-ia-para-mejorar-una-suite)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección aprenderás a usar IA como apoyo para diseñar pruebas, revisar cobertura y definir criterios técnicos de aceptación sin delegar ciegamente la validación. El foco no está en pedir tests por pedirlos, sino en construir un proceso donde la IA acelera el trabajo y el desarrollador conserva el control sobre la calidad. También veremos cómo convertir requisitos ambiguos en casos verificables y cómo detectar pruebas frágiles, superficiales o mal alineadas con el comportamiento real del sistema.

## El papel de la IA en testing
La IA puede acelerar mucho el testing, pero no sustituye el criterio técnico. Su mayor valor está en proponer casos de prueba, identificar escenarios límite y generar borradores de tests a partir de código, requisitos o errores observados.

El problema aparece cuando se acepta ese resultado sin revisar su relevancia. Un test puede compilar, ejecutarse y aun así no validar nada importante, o incluso reforzar un comportamiento incorrecto si el prompt estaba mal orientado.

En un flujo intermedio de vibe coding, la IA se usa como copiloto de exploración y redacción. La responsabilidad de decidir qué probar, con qué nivel de aislamiento y con qué criterio de aceptación sigue siendo del desarrollador.
## Qué pedir a la IA y qué no delegar
Pedir a la IA "escribe tests para este archivo" suele producir resultados genéricos y poco útiles. Funciona mejor cuando se le da contexto sobre el comportamiento esperado, los riesgos del módulo y el tipo de prueba deseado: unitaria, integración, contrato o interfaz.

También conviene especificar restricciones técnicas, por ejemplo si debe usar pytest, Jest o Testing Library, y si debe evitar mocks excesivos. Eso reduce respuestas superficiales y hace que el resultado se parezca más al estándar del equipo.

Lo que no conviene delegar es la decisión final sobre cobertura suficiente, prioridad de escenarios y aceptación del resultado. La IA propone; el desarrollador valida si las pruebas realmente protegen el comportamiento crítico.
## De requisitos ambiguos a casos verificables
Uno de los usos más valiosos de la IA es transformar descripciones vagas en criterios comprobables. Si un requisito dice "el sistema debe responder rápido", la IA puede ayudar a convertirlo en condiciones observables, pero hace falta acotar qué significa "rápido" y en qué contexto.

Un buen prompt pide a la IA que extraiga precondiciones, acciones y resultados esperados. Ese formato obliga a aterrizar el requisito y facilita derivar casos de prueba concretos, tanto positivos como negativos.

Por ejemplo, un requisito de autenticación puede traducirse en acceso válido, rechazo por credenciales erróneas, bloqueo tras intentos fallidos y gestión correcta de sesiones expiradas. La clave es pasar de intención difusa a comportamiento verificable.
## Criterios de validación técnica
Validar técnicamente no es solo comprobar que los tests pasan. Significa revisar si cubren lógica relevante, si fallan cuando deben fallar y si detectan regresiones reales en lugar de confirmar implementaciones triviales.

Un criterio útil es preguntar qué riesgo cubre cada test. Si no protege una regla de negocio, una integración sensible o un error frecuente, probablemente ese test aporta poco valor y solo aumenta mantenimiento.

También hay que revisar legibilidad, determinismo y aislamiento. Un test válido debe ser comprensible, repetible y suficientemente estable como para servir como señal de calidad, no como fuente constante de ruido.
## Señales de tests débiles generados por IA
Los tests generados por IA fallan a menudo en patrones reconocibles. Uno muy común es verificar detalles internos en lugar de comportamiento observable, lo que produce pruebas frágiles ante cualquier refactorización menor.

Otra señal es la sobreabundancia de mocks, especialmente cuando se mockea casi todo y el test deja de representar una situación real. También es frecuente encontrar asserts triviales, datos irrelevantes o duplicación de casos que no añaden cobertura efectiva.

Un buen hábito es revisar si el test podría seguir pasando aunque el comportamiento esperado estuviera roto. Si la respuesta es sí, el test necesita rediseño aunque haya sido generado con buena sintaxis.
## Iteración práctica con IA para mejorar una suite
El flujo más eficaz suele ser iterativo. Primero se pide a la IA un mapa de escenarios; después se seleccionan los más valiosos; luego se generan tests concretos y finalmente se revisan manualmente con foco en riesgo, claridad y mantenibilidad.

También se puede usar la IA para auditar una suite existente. Por ejemplo, pedirle que detecte huecos de cobertura semántica, casos límite no contemplados o dependencias innecesarias entre pruebas.

Un patrón útil es este:

Prompt: "Analiza este módulo y propón 8 escenarios de prueba priorizados por riesgo. Después genera solo los 3 más críticos en pytest, evitando mocks innecesarios y explicando qué comportamiento protege cada test."

Ese enfoque obliga a la IA a razonar antes de escribir código y da al desarrollador mejores puntos de control para validar el resultado.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.github.com/en/copilot" target="_blank">GitHub Docs - About GitHub Copilot</a>
- <a href="https://docs.pytest.org/" target="_blank">pytest Documentation</a>
- <a href="https://jestjs.io/docs/getting-started" target="_blank">Jest Documentation</a>
- <a href="https://testing-library.com/docs/" target="_blank">Testing Library Documentation</a>
