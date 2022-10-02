# Informe académico 1

| Identificación del proyecto
|-----------
| Fundamentos de Ingeniería de Software
ID M4C - Docente: Martín Solari Buela.
Estudiantes: Romina Arour, Maximiliano Giménez.

# Repositorio Git 
Para este proyecto usamos el repositorio creado por los docentes del curso, y lo clonamos en cada maquina así cada uno se quedaba con repositorio local.
Utilizamos los comandos de git aprendidos/utilizados en clase, que también se encuentran en la bibliografía de la materia, específicamente los del libro Pro Git de Chacon.
Los que más usamos fueron:  
**git clone (url)** Clona repositorio remoto a que quede como repositorio local  
**git add .**  Hace que los datos modificados entren a staging (para luego hacer commit)  
**git commit -m "mensaje"** Hace commit junto con comentario detallando los cambios hechos  
**git push** Actualiza repositorio remoto  
**git pull** Actualiza repositorio local   
**git branch (nombre branch)** Crea una rama nueva  
**git checkout (nombre branch)** Se cambia de rama  
**git log** Muestra registro de los commits hechos  
**git status** Muestra si hay cambios listos para hacer commit o si falta agregarlos al estado de staging  


# Versionado
El repositorio cuenta con dos ramas, la rama "main" siendo la principal, y la rama "dev" que es con la que mas trabajamos luego de crearla.
El uso de la rama dev es para ir actualizando los cambios hechos sin modificar la rama original. Una vez que consideremos que los cambios estén bien hechos y completos, ahí lo pasamos a la rama main.

## Evolución del proyecto y resumen de commits  
![22](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/22.jpg)  

![23](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/23.jpg)  


# Elicitación
## Entrevista
Hicimos entrevistas a 3 personas con diferente conocimiento sobre cómo va a ser el mundial y cuando. Todos los entrevistados son de mas o menos edad similar (alrededor de los 20).

En base a las entrevistas vimos que la forma de obtención de la información es a través de la comunicación entre conocidos (siendo amigos, familia, compañeros de estudio/trabajo) o directamente por internet.

Como observación pudimos notar que si lo buscaban en internet seguían pasos similares. Todos iban directo a Google y escribían "partido de Uruguay mundial", "Partido mundial Qatar", "Uruguay vs", etc, y luego de eso todos iban al primer resultado que aparecía en el buscador.

También se observó como todos los entrevistados tenían un mayor interés en la selección Uruguaya en comparación con los otros, y no todos tenían inclinación a saber sobre otras selecciones.  


[Página de referencia que le salió a uno de los entrevistados](https://hiraoka.com.pe/blog/post/mundial-qatar-2022-cuando-empieza-donde-es-fechas-y-horarios)
## Ingeniería Inversa
Buscamos una aplicación similar a lo que queremos llegar como aplicación final y encontramos una aplicación llamada "Mundial Resultados 2022" en la tienda de aplicaciones "Play Store". La instalamos para ver su funcionamiento con mucho mas detalle, con el fin de crear una nueva aplicación que haga tareas parecidas sin llegar a copiar los detalles de la original.
### Conclusiones de aplicar Ingeniería inversa en "Mundial Resultados 2022"  
<ul>
<li> Secciones principales: Partidos, Tablas, Inicio, Ajustes. </li>  
<li> Esta aplicación no necesita de ningún registro de usuario para poder ver su contenido</li>
<li> En la sección de Partidos se pude ver todos los partidos a jugar de cada jornada, estos están ordenados en orden cronológico (Imagen 5). </li>
<li> En la sección de Tablas se puede observar por un lado los grupos (A,B,C,etc), con las selecciones que lo integran y al lado de cada selección se muestran los puntos, diferencia de goles y los partidos jugados (Imagen 2), además esta información se puede ampliar para que también se muestren los partidos ganados, los perdidos, los empatados y los goles (Imagen 3).  
 
Por otro lado, hay una tabla de goleadores con un máximo de 10 jugadores a mostrar y sus respectivos goles (Imagen 4). Esta información suponemos que se ira actualizando partido a partido.
<li> En la sección Inicio en la parte de Partidos se pude ver algunos partidos a jugar (Imagen 1) y en la parte de Tabla se puede ver la misma interfaz de Tablas.
<li> En la parte de Ajustes entre bastantes ajustes que se pueden realizar, se puede activar notificaciones sobre los partidos que sean del interés del usuario (Imagen 6).
<li> Con el uso de la aplicación pudimos notar que se muestra publicidad al navegar entre los apartados de la misma.
</ul>

También decidimos analizar la página oficial de la FIFA, ya que contiene la información que necesitábamos para hacer nuestro proyecto y tener en cuenta como funcionaria para el nuestro.
### Conclusiones de aplicar Ingeniería inversa en "www.fifa.com" 
<ul>
<li> En la cabecera se muestran varias secciones relacionadas a futbol mismo, pero como nos centraremos en la del mundial fuimos directo a la que decía “competitions”, donde se muestra (al ubicar el cursor encima de la palabra) las distintas opciones y ahí seleccionamos “FIFA World Cup Qatar 2022” (Imagen 1)
<li> Se abre en la misma ventana otra página que muestra una cuenta regresiva de cuando empieza el torneo (Imagen 2). Si se baja más hay una sección con artículos sobre entrevistas y otra sección sobre jugadores a los que recomiendan prestar atención (Top 5 de distintos países). Luego de eso se muestran los distintos grupos, cada uno con los países que le perteneces acompañados por su bandera (Imagen 3). Enseguida por debajo de esa parte encontramos en la siguiente sección “Matches & Groups” donde te redirigen a otra página (Imagen 4).
<li> En esta otra página esta toda la información sobre horarios días partidos y estadios del mundial. Lo primero que se ve es un calendario a lo largo mostrando día por día (marcado esta la categoría “matches”), y según que día esta seleccionado muestra si hay partidos o no. Si los hay aclara la fecha (en formato día, mes y año) y luego muestra bien a la izquierda en que estadio será, y mas a la derecha están los nombres y banderas de los países que compiten junto con la hora del evento (Imagen 5). Si se apreta sobre esa sección con la información te lleva a otra página con más detalles del mismo.
<li> Si se apreta en la categoría “tables” muestran los países ordenados por los grupos en una tabla, junto con datos numéricos sobre los partidos. (Imagen 6)
<li> En cambio si vamos a la última categoría, “teams”, aparecen todos los países que participan, ordenados alfabéticamente y con imagen de su bandera. (Imagen 7)
<li> No se muestra publicidad al navegar entre las distintas partes de la página de la FIFA
</ul>

### Imágenes de "Mundial Resultados 2022" 
Imagen 1:  
<img src="https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/16.jpg" alt="16" width="300"/>  

Imagen 2:  
<img src="https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/17.jpg" alt="17" width="300"/>  

Imagen 3:  
<img src="https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/18.jpg" alt="18" width="300"/>  

Imagen 4:  
<img src="https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/19.jpg" alt="19" width="300"/>  

Imagen 5:  
<img src="https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/20.jpg" alt="20" width="300"/>  

Imagen 6:  
<img src="https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/21.jpg" alt="21" width="300"/>


### Imágenes de "www.fifa.com"
Imagen 1:  
![1](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/1.png)
Imagen 2:  
![2](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/2.png)
Imagen 3:  
![3](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/3.png)
Imagen 4:  
![4](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/4.png)
Imagen 5:  
![5](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/5.png)
Imagen 6:  
![6](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/6.png)
Imagen 7:  
![7](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/7.png)

## Investigación
[Página de la FIFA con información del mundial](https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022)  
La página oficial de la FIFA tiene una sección dedicada al mundial en Qatar de 2022 que brinda entrevistas, noticias, Top 5 de jugadores de varios países para tener en cuenta, junto con los grupos formados y que selecciones que participan del evento.  
También se puede encontrar los datos mas específicos sobre los partidos, muestran un calendario con las fechas y que partido hay en que día, junto los países que participan del mismo, y junto con estos también aclaran en que estadio será.  
[Acá un link hacia un resumen oficial de la FIFA sobre fechas y partidos del mundial, mostrado de una forma muy visual](https://digitalhub.fifa.com/m/464f16f856f5ed05/original/FIFA-World-Cup-Qatar-2022-Match-Schedule.pdf)
# Caracterización de Usuarios / User Personas
[Página donde tomamos formato](https://app.xtensio.com/design/xyz6n4zx)  
[Página para imágenes libre de copyright que usamos](https://www.pexels.com/)
![User Persona 1](https://user-images.githubusercontent.com/96496417/192169590-f1a64334-7d00-48d8-adfb-773da32b6cdd.PNG)
![User Persona 2](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/user%20persona2.PNG)
# Modelo conceptual del problema
![15](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/15.jpg)
# Especificación
## Requerimientos Funcionales
En todos los requerimientos funcionales el actor va a ser el usuario.
### RF1: Elegir Selección Futbol.
 - **Actor:** Usuario.
 - **Descripción:** El Sistema debe permitirle al usuario elegir entre la lista de selecciones disponibles el que le interese, y luego mostrarle los próximos partidos en el que participa.
 - **Prioridad:** Alta

### RF2: Pronóstico Ganador.
 - **Actor:** Usuario.
 - **Descripción:** El sistema debe permitirle al usuario debe de poder elegir un partido y luego seleccionar cuál de las 2 selecciones será el posible ganador.
 - **Prioridad:** Alta

### RF3: Tabla Grupos.
 - **Actor:** Usuario.
 - **Descripción:** El usuario tiene la opción de ir a la sección de tablas, donde el sistema le tendría que luego mostrar los grupos ordenados de forma alfabética.
 - **Prioridad:** Alta

### RF4: Pronósticos Realizados.
 - **Actor:** Usuario.
 - **Descripción:** El usuario tendría que poder ir a la sección de pronosticos y el sistema le debe de mostrar las predicciones hechas hasta ese momento.
 - **Prioridad:** Alta
## Requerimientos No Funcionales
* **RNF1: Color**   
  Descripción: El sistema debe utilizar como color primario Green 900 y Light Blue 700 como color segundario.  
  Prioridad: Alta.  

* **RNF2: Tipo de fuente**  
  Descripción: La tipografía debe ser Roboto.  
  Prioridad: Alta.  

* **RNF3: Iconos**
  Descripción: Debe utilizar el formato filled para los iconos.  
  Prioridad: Alta.  

* **RNF4: Sistema responsive**  
  Descripción: El sistema debe ser accesible y adaptable en cualquier dispositivo.  
  Prioridad: Alta.  

* **RNF5: Persistencia**  
  Descripción: Se debe poder guardar la configuración realizada por el hincha.  
  Prioridad: Media.  
  
# User Stories / Historias de Usuarios
### Historia usuario 1.
**Título:** Elegir Selección Futbol.

**Como** Como Usuario quiero poder elegir la selección de futbol que me interesa así puedo ver cuáles son los próximos partidos en los que participa.

**Criterios de aceptación:** Ninguna.

## Historia usuario 2.
**Título:** Hacer Pronostico.

**Como** Como Usuario quiero ser capaz de registrar mi predicción de cada partido así luego puedo revisar si predije bien o no.

**Criterios de aceptación:** Debe guardarse el registro y el usuario tiene que volver a entrar luego del partido para revisar si la predicción fue correcta o no.


# Casos de Uso / Use Cases  
---
## Caso de uso 1:  

### **Título:**  Elegir una selección de futbol
  
### **Actor:** Hincha  

### **Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1. Hincha abre la aplicación | 2. El sistema muestra en Inicio un recuadro para elegir selecciones|
|3. Elige una selección |4. Muestra los próximos partidos a jugar de la selección elegida por orden cronológico|  
     
![14](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/14.jpg)  

![13](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/13.jpg)  


---
  ## Caso de uso 2:  

### **Título:**  Hacer pronóstico de ganador
  
### **Actor:** Hincha  

### **Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1. El hincha selecciona un partido| 2. El sistema despliega una ventana con la información del partido y una sección para marcar un ganador|
|3. Selecciona un ganador posible| 4. Marca la opción seleccionada|
|5. Hace click en la flecha| 6. Vuelve a la página de Inicio|

### **Curso alternativo:**  
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1. El hincha selecciona un partido| 2. El sistema despliega una ventana con la información del partido y una sección para marcar un ganador|
|3. Hace click en la flecha| 4.Vuelve a la página de Inicio|

![12](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/12.jpg)  

---
  ## Caso de uso 3:  

### **Título:**  Ver tabla de grupos 
  
### **Actor:** Hincha  

### **Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1. El hincha ingresa a la sección Tablas| 2. El sistema despliega todas las tablas de grupos ordenada por orden alfabético|

![10](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/10.jpg)  

---
  ## Caso de uso 4:  

### **Título:**  Ver pronósticos realizados 
  
### **Actor:** Hincha  

### **Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1. El hincha ingresa a la sección Pronósticos| 2. El sistema muestra los pronósticos realizados hasta el momento|

![11](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/11.jpg)  

# Validación y verificación

## Verificación
|Requerimiento|RF1|RF2|RF3|RF4|RNF1|RNF2|RNF3|RNF4|RNF5|
|---------|--|--|--|--|--|--|--|--|--|
|Viable / Factible|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|Consistencia|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|Preciso / No Ambiguo|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|Prioridad|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|Verificable|Si|Si|Si|Si|Si|Si|Si|Si|Si|

## Validación
Le mostramos a varios usuarios el prototipo, con los bocetos de interfaz y pudimos concluir que haría falta:  
1. Poner una barra en la parte inferior que contenga información actualizada de los resultados de todos los partidos recientes jugados.  
2. Poder comparar su pronóstico con el resultado una vez que haya terminado el partido.
3. En la parte de partidos además de la información de la fecha y hora, también poner en que cancha se va a jugar.  
4. Luego de marcar la predicción, mostrar porcentaje de cuantos votaron a ambos equipos.
5. Posibilidades de ver que jugadores participarían en que selección para cada partido.
6. Cuando se muestren los resultados finales de cada partido, mostrar quienes metieron los goles, y aclarar si hubo expulsiones.
7. Que la tabla de resultados actuales se pueda comparar con una tabla de los pronosticos hechos por los usuarios.
8. En tabla de pronósticos agregar opción de empate para los 3 primeros partidos.
9. Antes de realizar el pronóstico, mostrar cual va ganando.
Como se puede notar, hubo mucha sugerencia más hacia el lado de hacer las predicciones en si.
# Reflexión
## Detalle del trabajo individual 
Trabajamos bastante juntos, pero más cerca de la fecha de entrega nos dividimos algunas de las actividades y nos consultábamos lo que íbamos avanzando y si faltaba agregar algo o no.

|Fecha| Actividad|Responable|  
|-----|----------|----------|  
|25 Setiembre|Entrevistas|Ambos|  
|27 Setiembre|Ingeniería Inversa|Ambos|  
|30 Setiembre|Investigación|Romina|  
|25 Setiembre|User personas|Ambos|  
|30 Setiembre|Modelo conceptual del problema|Maximiliano|  
|30 Setiembre|Requerimientos funcionales|Romina|  
|1 Octubre|Requerimientos no funcionales|Maximiliano|  
|1 Octubre|User stories|Romina|  
|30 Setiembre|Use cases|Maximiliano|  
|30 Setiembre|Bocetos de IU|Maximiliano|  
|2 Octubre|Validación|Ambos|  
|2 Octubre|Verificación|Ambos|  

## Técnicas aplicadas y aprendizajes
Utilizamos varios conceptos dados en clase y la gran mayoría los aplicamos para esta entrega, entre ellas lo aprendido sobre git y github, técnicas de elicitación, todo lo que tiene que ver con User Stories, Use Cases y User Profiles, etc.  
El hecho de que el proyecto lo hicimos en equipo nos ayudó bastante a tener una segunda opinión cuando sugeríamos ideas e implementaciones que pensábamos hacer, y nos facilitó bastante en la parte de hacer entrevistas para reunir varias personas con diferentes conocimiento sobre el tema del proyecto (el Mundial).