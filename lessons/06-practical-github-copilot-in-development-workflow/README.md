# 06. Uso práctico de GitHub Copilot en el flujo de desarrollo

- [Introducción](#introducción)
- [Copilot como asistente dentro del flujo real](#copilot-como-asistente-dentro-del-flujo-real)
- [Puntos del ciclo donde Copilot ayuda más](#puntos-del-ciclo-donde-copilot-ayuda-más)
- [Cómo preparar el contexto para obtener mejores sugerencias](#cómo-preparar-el-contexto-para-obtener-mejores-sugerencias)
- [Aplicación práctica en tareas habituales](#aplicación-práctica-en-tareas-habituales)
- [Patrón de trabajo recomendado con Copilot](#patrón-de-trabajo-recomendado-con-copilot)
- [Límites, revisión y uso responsable](#límites-revisión-y-uso-responsable)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
En esta lección veremos cómo integrar GitHub Copilot de forma útil y controlada en el trabajo diario de desarrollo. El objetivo no es delegar ciegamente en la herramienta, sino aprender a usarla para acelerar tareas concretas, mantener el foco y reducir fricción en actividades repetitivas. También trabajaremos patrones de interacción que mejoran la calidad de las sugerencias y ayudan a validar mejor el resultado.

## Copilot como asistente dentro del flujo real
GitHub Copilot aporta más valor cuando se usa dentro de tareas concretas del día a día, no como un generador masivo de código sin supervisión. En un flujo real, suele intervenir al crear funciones pequeñas, completar estructuras repetitivas, sugerir tests, explicar fragmentos y proponer alternativas de implementación.

La clave está en tratarlo como un copiloto y no como un sustituto del criterio técnico. El desarrollador sigue definiendo intención, restricciones, estilo y validación, mientras la herramienta reduce tiempo mecánico y ofrece borradores útiles para iterar.

En la práctica, esto significa alternar entre escribir, aceptar parcialmente, corregir y volver a pedir contexto implícitamente a través del propio código. Cuanto más claro esté el archivo, los nombres y la estructura, más probable será que las sugerencias encajen con el objetivo.
## Puntos del ciclo donde Copilot ayuda más
Copilot suele ser especialmente eficaz en momentos de arranque o continuidad, cuando ya existe una dirección clara pero falta velocidad de ejecución. Por ejemplo, puede completar validaciones, crear funciones auxiliares, proponer manejo de errores o generar casos base para pruebas.

También resulta útil en refactorizaciones pequeñas, como extraer lógica repetida o adaptar una función a una interfaz ya existente. En estos casos, el contexto local del archivo y los nombres de las funciones influyen mucho en la calidad de la propuesta.

Donde menos conviene depender de él es en decisiones de arquitectura, lógica de negocio ambigua o código sensible sin revisión profunda. Ahí sigue siendo necesario pensar primero y usar la IA solo como apoyo para explorar opciones.
## Cómo preparar el contexto para obtener mejores sugerencias
Copilot responde mejor cuando el código ya expresa intención de forma clara. Firmas bien nombradas, comentarios breves, tipos explícitos y estructuras coherentes ayudan a que la herramienta complete en la dirección correcta sin necesidad de instrucciones largas.

Un patrón muy útil consiste en escribir primero el esqueleto de la solución y dejar que Copilot complete los detalles. Por ejemplo, definir una función, anotar qué debe hacer y empezar la primera línea suele producir sugerencias más precisas que pedir una solución desde cero.

También conviene trabajar en pasos pequeños y revisar cada bloque antes de continuar. Aceptar sugerencias largas sin entenderlas aumenta el riesgo de introducir errores, duplicidad o dependencias innecesarias.
## Aplicación práctica en tareas habituales
En desarrollo cotidiano, Copilot puede ayudar a crear transformaciones de datos, validaciones de entrada, llamadas a servicios, utilidades de formato y pruebas unitarias iniciales. Su mayor ventaja aparece cuando la tarea es conocida pero tediosa, y el valor está en acelerar la ejecución sin perder control.

Por ejemplo, al implementar una función de filtrado o un parser sencillo, la herramienta puede proponer una primera versión razonable que luego se ajusta al dominio. Ese borrador ahorra tiempo, pero debe contrastarse con requisitos, edge cases y convenciones del proyecto.

También puede servir para documentar mejor el código existente, generar nombres alternativos o explicar un bloque confuso antes de refactorizarlo. En ese sentido, no solo produce código, sino que puede apoyar comprensión y mantenimiento.
## Patrón de trabajo recomendado con Copilot
Un flujo maduro con Copilot suele seguir una secuencia simple: definir intención, preparar contexto, aceptar solo lo útil, revisar con criterio y validar con ejecución o tests. Este patrón evita la automatización impulsiva y convierte la herramienta en una ayuda estable dentro del proceso.

Un ejemplo de punto de partida puede ser el siguiente:

function normalizeEmail(email) {
  // trim, lowercase and validate basic format
}

A partir de un esqueleto así, Copilot suele sugerir una implementación alineada con la intención visible. Después, el trabajo importante del desarrollador es comprobar si la validación es suficiente, si cubre casos límite y si encaja con las reglas reales del sistema.
## Límites, revisión y uso responsable
Aunque Copilot acelera, no garantiza corrección, seguridad ni adecuación al contexto completo del proyecto. Puede sugerir código obsoleto, asumir librerías no presentes o proponer soluciones plausibles pero incorrectas en detalles importantes.

Por eso, cada sugerencia debe pasar por una revisión equivalente a la que aplicaríamos a una contribución humana. Hay que verificar lógica, complejidad, dependencias, estilo, manejo de errores y posibles implicaciones de seguridad antes de integrar el resultado.

El uso responsable también implica evitar exponer información sensible y comprender la política de la organización sobre herramientas asistidas por IA. La productividad mejora de verdad cuando la velocidad adicional no degrada calidad ni gobernanza.


## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://github.com/features/copilot" target="_blank">GitHub Copilot</a>
- <a href="https://docs.github.com/es/copilot" target="_blank">Documentación oficial de GitHub Copilot</a>
- <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>
