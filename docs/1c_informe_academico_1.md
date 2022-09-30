# 1c Informe académico 1

| Identificación del proyecto
|-----------
| Fundamentos de Ingeniería de Software
ID M4C - Docente: Martín Solari Buela.
Estudiantes: Romina Arour, Maximiliano Giménez.

# Repositorio Git 
Para este proyecto usamos el repositorio creado por los docentes del curso, y lo clonamos en cada maquina asi cada uno se quedaba con repositorio local.
Utilizamos los comandos de git aprendidos/utilizados en clase, que también se encuentran en la bibliografía de la materia, específicamente los del libro Pro Git de Chacon.
Los que más usamos fueron:  
**git clone (url)** Clona repositorio remoto a que quede como repositorio local
**git add .**  Hace que los datos modificados entren a staging (para luego hacer commit)
**git commit -m "mensaje"** Hace commit junto con comentario detallando los cambios hechos
**git push** Actualiza repositorio remoto
**git pull** Actualiza repositorio local 
**git branch (nombre branch)** Crea una rama nueva
**git checkout (nombre branch)** Se cambia de rama
**git log** Muestra registrio de los commits hechos
**git status** Muestra si hay cambios listos para hacer commit o si falta agregarlos al estado de staging


# Versionado
El repositorio cuenta con dos ramas, la rama "main" siendo la principal, y la rama "dev" que es con la que mas trabajamos luego de creearla.
El uso de la rama dev es para ir actualizando los cambios hechos sin modificar la rama original. Una vez que consideremos que los cambios esten bien hechos y completos, ahí lo pasamos a la rama main.

# Elicitación
## Entrevista
Hicimos entrevistas a 3 personas con diferente conocimiento sobre como va a ser el mundial y cuando. Todos los entrevistados son de mas o menos edad similar (alrededor de los 20).

En base a las entrevistas vimos que la forma de obtención de la información es a través de la comunicación entre conocidos (siendo amigos, familia, compañeros de estudio/trabajo) o directamente por internet.

Como observación pudimos notar que si lo buscaban en internet seguían pasos similares. Todos iban directo a Google y escribían "partido de Uruguay mundial", "Partido mundial Qatar", "Uruguay vs", etc, y luego de eso todos iban al primer resutlado que aparecía en el buscador.

También se observó como todos los entrevistados tenían un mayor interés en la selección Uruguaya en comparación con los otros, y no todos tenían inclinación a saber sobre otras selecciones.


[pagina de referencia que le salió a uno de los entrevistados](https://hiraoka.com.pe/blog/post/mundial-qatar-2022-cuando-empieza-donde-es-fechas-y-horarios)
## Ingenieria Inversa
Buscamos una aplicacion similar a lo que queremos llegar como aplicación final y encontramos una aplicación llamada "Mundial Resultados 2022" en la tienda de aplicaciones "Play Store". La instalamos para ver su funcionamiento con mucho mas detalle, con el fin de crear una nueva aplicación que haga tareas parecidas sin llegar a copiar los detalles de la original.
### Conclusiones de aplicar Ingenieria inversa en "Mundial Resultados 2022"  
<ul>
<li> Secciones principales: Partidos, Tablas, Inicio, Ajustes. </li>  
<li> Esta aplicación no necesita de ningún registro de usuario para poder ver su contenido</li>
<li> En la sección de Partidos se pude ver todos los partidos a jugar de cada jornada, estos están ordenados en orden cronológico </li>
<li> En la sección de Tablas se puede observar por un lado los grupos (A,B,C,etc), con las selecciones que lo integran y al lado de cada selección se muestran los puntos, diferencia de goles y los partidos jugados, además esta información se puede ampliar para que también se muestren los partidos ganados, los perdidos, los empatados y los goles.
Por otro lado, se muestran los goleadores con un máximo de 10 jugadores a mostrar y sus respectivos goles. Esta información suponemos que se ira actualizando partido a partido.
<li> En la sección Inicio en la parte de Partidos se pude ver algunos partidos a jugar y en la parte de Tabla se puede ver la misma interfaz de Tablas.
<li> En la parte de Ajustes entre bastantes ajustes que se pueden realizar, se puede activar notificaciones sobre los partidos que sean del interés del usuario.
<li> Con el uso de la aplicación pudimos notar que se muestra publicidad al navegar entre los apartados de la misma.
</ul>

## Investigacion
[pag de la fifa con info del mundial](https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022)
# Caracterizacion de Usuarios / User Personas
[pagina para hacerlo](https://app.xtensio.com/design/xyz6n4zx)
[pagina para imagenes libre de copyright](https://www.pexels.com/)
![Uner Persona 1](https://user-images.githubusercontent.com/96496417/192169590-f1a64334-7d00-48d8-adfb-773da32b6cdd.PNG)
![User Persona 2](https://github.com/ORT-FIS-2022S2/proyecto-arour-gimenez/blob/dev/docs/investigacion/user%20persona2.PNG)
# Especificación
## Requerimientos Funcionales
## Requerimientos No Funcionales

# User Stories / Historias de Usuarios

# Casos de Uso / Use Cases  
## Caso de uso 1:  
---
### **Título:**  Elegir una seleccion de futbol
  
### **Actor:** Hincha  

### **Curso normal:**

| Accion de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1.Hincha abre la aplicacion | 2.El sistema mustra en Inicio un recuadro para elegir selecciones|
|2.Elige una seleccion |4.Muestra los proximos partidos a jugar de la seleccion elegida por orden cronologico|  
     

---
  ## Caso de uso 2:  
---
### **Título:**  Hacer pronostico de ganador
  
### **Actor:** Hincha  

### **Curso normal:**

| Accion de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1.El hincha selecciona un partido| 2.El sistema despliega una ventana con la informacion del partido y una seccion para marcar un ganador|
|3.Selecciona un ganador posible| 4.Marca la opcion seleccionada|
|5.Hace click en la flecha| 6.Vuelve a la pagina de Inicio|

### **Curso alternativo:**  
| Accion de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1.El hincha selecciona un partido| 2.El sistema despliega una ventana con la informacion del partido y una seccion para marcar un ganador|
|3.Hace click en la flecha| 4.Vuelve a la pagina de Inicio|

---
  ## Caso de uso 3:  
---
### **Título:**  Ver tabla de grupos 
  
### **Actor:** Hincha  

### **Curso normal:**

| Accion de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1.El hincha ingresa a la seccion Tablas| 2.El sistema despliega todas las tablas de grupos ordenada por orden alfabetico|

---
  ## Caso de uso 4:  
---
### **Título:**  Ver pronosticos realizados 
  
### **Actor:** Hincha  

### **Curso normal:**

| Accion de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
|1.El hincha ingresa a la seccion Pronosticos| 2.El sistema mustra los pronosticos realizados hasta el momento|


# Validación y verificación

# Reflexión


## Detalle del trabajo individual

Fecha, actividad, esfuerzo, responsable

## Técnicas aplicadas y aprendizajes
