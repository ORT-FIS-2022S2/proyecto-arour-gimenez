# 2a Implementación

## Funciones implementadas

### Implementación de funciones principales (sin la necesidad de persistencia de datos)
Al proyecto le agregamos funciones relacionadas a Selección, en el cual con el constructor definimos el formato y la información que guardamos, también dar la oportunidad de cambiar los datos cuando una selección gana un partido, mostrar los datos definidos y también verificar si son selecciones válidas o no.  
En la sección Tablas de la página, se cambiaría la información a mano en el HTML y no en base a la función definida en Selección ya que no supimos como cambiar los datos de una tabla.  

Con relación a lo anterior tenemos funciones en la clase lista-selecciones que sirven para cargar en una lista los nombres de las selecciones (ordenadas alfabéticamente) y otra lista con las banderas de cada una.

Creamos la clase Partido para poder guardar fecha, hora y los países involucrados en cada partido del mundial, y eso lo usamos junto con unas listas de partidos que nos dejan registrar y acceder esa información.

Por último, tenemos Pronostico, que fue creado con la idea de que si eventualmente el usuario quería comprobar si su predicción era correcta o no, que ahí se definiera la lógica para comprobarlo. Por como armamos la entrega, quedo sin uso esa clase, igualmente decidimos dejarla ya que hace que el dominio quede más completo y en un caso real se podría llegar a necesitar.  


### Documentación del uso de librerías externas (package.json)
Para la entrega utilizamos la libreria de Material Design de Google.

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive)
Hicimos el proyecto teniendo el cuenta de que la pagina sea responsive tanto para web como para mobile, considerando los posibles diferentes tamaños que los dispositivos mobiles pueden tener.

Usamos Material Design de Google para el diseño consistente de todos los elementos de la página. Lo tratamos de hacer lo más minimalista posible para que quede fácil de usar y que no requiera mucho trabajo acceder a cada sección de la página y así poder ver la información.

### Página única con navegación entre secciones
Creamos tres secciones, la primera (y la que aparece como predeterminada) siendo el Inicio, que incluye un menu dropdown con todos los países para filtrar desde ahí. Sin seleccionar nada se pueden ver todos los partidos y países ordenados por fecha y hora, y una vez luego de elegir un partido por el que filtrar se puede volver a acceder a todos los partidos apretando en la opción de la lista dropdown que dice "Todos".

Luego a la izquierda de Inicio, tenemos la sección Tablas, que muestra tablas divididas por cada grupo y muestra información sobre cada país del grupo. La información mostrada es sobre la cantidad de partidos jugados (pj), la diferencia de puntos (dif) y los puntos que tiene. 

Por último, a la derecha, tenemos Predicción. En esta sección tenemos listado los partidos pero sin información del mismo (solo se muestra que país se enfrenta a cual otro) y abajo de eso hay 3 opciones mostradas por un radio button para que el usuario pueda marcar su predicción del ganador (las opciones son el nombre de cada países para seleccionar el ganador, y la opción de que sea empate).


### Implementación: Material Design Web Components  
Usamos Material Design de Google para todos los tipos de elementos.   
Usamos tabs para navegar entre el inicio, la sección de tablas y la sección de pronóstico.  
Select menus lo usamos en la sección de inicio para poder filtrar los partidos por los distintos países.  
Los radio buttons los usamos en la sección de pronóstico con el fin de seleccionar un ganador o empate.  
Las listas las usamos en la sección de inicio para mostrar los partidos, también para la sección de tablas para mostrar la lista de tablas y por último en la sección de pronóstico para mostrar la lista de todos los pronósticos que se pueden hacer.  
Usamos las tablas en la sección tablas para mostrar cada grupo con sus respectivos países.   




## Codificación

Usamos IDE Visual Studio Code en las maquinas de cada uno para hacer el proyecto. Tuvimos en cuenta los estandares de codificacón de Google y usamos eslint para asegurarnos que el formato del codigo cumpla con lo esperado y nos ayudaba a ver si alguna funcion o variable no la estabamos usando. 

Usamos buenas practicas de OOP, dejando separada la logica y la interfaz del proyecto.

## Test unitario
 

Usamos la herramienta Jest de JavaScript para realizar el testing unitario.  
Se creó un test por clase de dominio para comprobar su funcionamiento, alcanzando 100% de cobertura. Dichos test están en el directorio dominio.  
Además de llegar al 100% de cobertura, realizamos más test que prueban los casos límites y casos donde se espera un resultado incorrecto.  

 PASS  ./Pronostico.test.js (6.242 s)  
 PASS  ./Seleccion.test.js (6.838 s)  
 PASS  ./lista-partidos.test.js (7.033 s)  
 PASS  ./Partido.test.js  
 PASS  ./lista-selecciones.test.js  
   

File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |      100 |     100 |     100 |                   
 Partido.js           |     100 |      100 |     100 |     100 |                   
 Pronostico.js        |     100 |      100 |     100 |     100 |                   
 Seleccion.js         |     100 |      100 |     100 |     100 |                   
 lista-partidos.js    |     100 |      100 |     100 |     100 | 
 lista-selecciones.js |     100 |      100 |     100 |     100 | 


Test Suites: 5 passed, 5 total  
Tests:       22 passed, 22 total  


### Casos significativos:  
Ejemplo de test para clase Partido:  
  test('agregar en un partido una seleccion invalida', ()=>{
    expect(()=>partido.setPartido('Chile', 'Ecuador',
        'Lun 21 Nov 22', '13:00 hs')).toThrow();
  });  
  test('agregar un partido valido', ()=>{
    partido.setPartido('Qatar', 'Ecuador', 'Lun 20 Nov 22', '13:00 hs');
    expect(partido.getPartido()).toEqual(partido);
  });

> ## Code freeze
> En la semana previa a la entrega final se debe congelar el desarrollo.
> A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y documentación.
