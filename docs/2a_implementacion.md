# 2a Implementación

## Funciones implementadas

### Implementación de funciones principales (sin la necesidad de persistencia de datos)
Al proyecto le agregamos funciones relacionadas a Seleccion, en el cual definimos el formato y la información que guardamos, tambien dar la oportunidad de cambiar los datos cuando una seleccion gana un partido, mostrar los datos definidos y tambien verificar si son validas o no.

Medio relacionado al anterior tambien tenemos funciones que son una lista de los nombres de las selecciones (ordenadas alfabeticamente) y otra lista con las banderas de cada una.

Creamos la clase Partido para poder guardar fecha, hora y los paises involucrados en cada partido del mundial, y eso lo usamos junto con unas listas de partidos que nos dejan registrar y acceder esa información.

Por ultimo tenemos Pronostico, que fue creado con la idea de que si eventualmente el usuario queria comprobar si su predicción era correcta o no, que ahi se definiera la logica para comprobarlo. Por como armamos la entrega, quedo sin uso esa clase.

### Documentación del uso de librerías externas (package.json)
Para la entrega utilizamos la libreria de Material Design de Google.

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive)
Hicimos el proyecto teniendo el cuenta de que la pagina sea responsive tanto para web como para mobile, considerando los posibles diferentes tamaños que los dispositivos mobiles pueden tener.

Usamos Material Design de Google para el diseño consistente de todos los elementos de la página, y lo tratamos de hacer lo mas minimalista posible para que quede facil de usar y que no requiera mucho trabajo acceder a cada sección de la pagina y poder ver la información.

### Página única con navegación entre secciones
Creamos tres secciones, la primera (y la que aparece como predeterminada) siendo el Inicio, que incluye un menu dropdown con todos los paises apra filtrar desde ahi. Sin seleccionar nada se pueden ver todos los partidos y paises ordenados por fecha y hora, y una vez luego de elegir un partido por el que filtrar se puede volver a acceder a todos los partidos apretando en la opcion de la lista dropdown que dice "Todos".

Luego a la izquierda de Inicio, tenemos la sección Tablas, que muestra tablas divididas por cada grupo y muestra informacióhn sobre cada pais del grupo. La informacion mostrada es sobre la cantidad de partidos jugados (pj), la diferencia de puntos (dif) y los puntos que tiene. 

Por ultimo, y bien a la derecha, tenemos Predicción. En esta seccion tenemos listado los partidos pero sin informacion del mismo (solo se muestra que pais se enfrenta a cual otro) y abajo de eso hay 3 opciones mostradas por un radio button para que el usuario pueda marcar su predicción del ganador (las opciones siendo nombre de ambos paises, y la opcion de que sea empate).


Implementación: Material Design Web Components

Aplicar un sistema de diseño y principios de usabilidad

Cumplimiento de estándar de accesibilidad WCAG

Seguir especificación de estilo

## Codificación

IDE Visual Studio Code: configuración común del equipo

Estándares de codificación Google (HTML, CSS, JavaScript)

Buenas prácticas de OOP: separación de lógica e interfaz

Análisis estático de código: mostrar reducción de problemas

## Test unitario

Test unitarios en Jest 

Detallar cantidad e incluir ejemplos significativos

100% cobertura en clases de dominio


> ## Code freeze
> En la semana previa a la entrega final se debe congelar el desarrollo.
> A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y documentación.
