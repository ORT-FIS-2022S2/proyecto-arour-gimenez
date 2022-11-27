# 2a Test de sistema

Proyecto asingado para testear: ______

## Test de sistema

### Realizar test de sistema en un entorno separado del desarrollo

### Generar casos de prueba aplicando técnica partición equivalente

### Detallar sesiones de prueba exploratoria



## Reporte de issues
### Resumen de los issues que hicimos en Github:

#### Severidad Grave
3) En Todas las Secciones - 
tabla de posiciones: la parte para poner filtros no es responsive, para tamaños menores o iguales a 426px no se puede elegir grupo.
Lo mismo para sección favoritos.
resultados la parte para poner filtros no es responsive, para tamaños menores o iguales a 667px no se puede elegir categoría, para tamaños menores o iguales a 960px no se puede elegir grupo y para tamaños menores o iguales a 341px no se puede elegir país.
Lo mismo para sección favoritos.
Al variar el ancho el botón de reset queda por arriba de los filtros en sección favoritos y sección resultados.

6) En sección Favoritos y Predicciones: para anchos menores a 730px, en las listas de partidos pendientes y partidos no realizados no se activa la barra de desplazamiento horizontal, no es visible la información completa.

10) Sidebar - el sidebar no es responsive, para tamaños de pantalla < 632px los elementos de la seccion seleccionada quedan ocultos y visualmente "roto" (no se muestran los objetos de la derecha de forma correcta)

#### Severidad Media
1) Mala expresion usada en Favoritos: Partidos no realizados = Partidos que ya se jugaron.

2) En partidos pendientes selecciona por día y no por hora.
Ej:24/11/2022 a la hora 15:00 URU vs COR sigue apareciendo en partidos pendientes y no en la otra sección.

8) En sección resultado-resultado al tocar la estrella se pone en amarillo, pero al tocarlo otra vez para deseleccionar no cambia el color (hay que tocarlo dos veces para que esto pase, sin embargo, la funcionalidad está bien al tocarlo de a una vez).

4) En Partidos - Info de partidos no es responsive para pantallas menores a 350px. Empiezan a "desaparecer datos" a menos que se use scroll horizontal (no queda intuitvo) y los datos/botones aparecen por fuera del cuadro que contenia las cosas.

5) En Partidos y en Predicciones - El funcionamiento de las predicciones no siempre es correcto. Si se confirma hacer prediccion sin ingresar datos se la toma como correcta y quedan los campos vacios. Si se decide modificar los datos actuales (ya sea en seccion Partidos o en Predicciones) y solo se cambia 1 valor, al poner confirmar esos cambios se reemplaza el que se queria cambiar pero el que quedaba igual queda vacio.

#### Severidad Baja
7) Al seleccionar una opción de categoría en la sección resultado-resultado y cambiar a resultado-tabla de posiciones no se resetea como si lo hacen los otros campos cuando se seleccionan solos.

9) En sección resultado-resultado al poner el filtro de fecha y cambiar a sección resultado-tabla de posiciones y volver no resetea los partidos con esa fecha, como si lo hace con otros filtros o con el mismo filtro de fecha, pero con otro/s filtros seleccionados.


## Reporte de calidad del sistema

### Sumarizar número de issues reportados por tipo

### Realizar una evaluación global de la calidad del sistema