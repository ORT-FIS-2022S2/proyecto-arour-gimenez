# 2a Test de sistema

Proyecto asingado para testear: ______

## Test de sistema

### Generar casos de prueba aplicando técnica partición equivalente  
  

Utilizamos la técnica de partición equivalente para la parte de ingresar predicciones, y así poder comprobar su funcionamiento.  

| Entrada | Clases Válidas | Clases Invalidas |
| --------------------- | --------------------- |--------------------- |
| Numero Izquierda | Números mayores o iguales a 0, menores o iguales a 20 (1)| Números negativos, números mayores a 20 (3)|
| Numero Derecha | Números mayores o iguales a 0, menores o iguales a 20 (2)| Números negativos, números mayores a 20 (4)|



| Caso de Prueba | Numero Izquierda | Numero Derecha | Resultado Esperado | Clases de Prueba Cubiertas |
|----------------|------------------|----------------|--------------------|----------------------------|
| CP1 | 5 | 3 | Mensaje: Prediccion realizada con éxito. | 1, 2 |
| CP2 | -2 | 6 | Mensaje: Los valores de la predicción ingresada deben ser menores a 20 y mayores que 0. | 3, 2 |
| CP3 | 4 | -7 | Mensaje: Los valores de la predicción ingresada deben ser menores a 20 y mayores que 0. | 1, 4 |
| CP4 | 21 | 2 | Mensaje: Los valores de la predicción ingresada deben ser menores a 20 y mayores que 0. | 3, 2 |
| CP5 | 1 | 23 | Mensaje: Los valores de la predicción ingresada deben ser menores a 20 y mayores que 0. | 1, 4 |

### Detallar sesiones de prueba exploratoria
| Fecha | Duración* |  Misión | Tester |
|-------|---------|---------|--------|
| 23 Noviembre | 1 Hora | Probar si sección Partidos es responsive | Romina |
| 24 Noviembre | 1 Hora y Media | Probar si Partidos y Prediccion es Responsive | Romina |
| 24 Noviembre | 1/2 Hora | Probar funcionamiento de Predicciones | Romina |
| 23 Noviembre  | 1 hora |Probar funcionamiento de favoritos  | Maximiliano |
| 24 Noviembre | 1 hora |Probar funcionamiento de resultados  | Maximiliano |

*Tomamos la duración aproximada. 

## Reporte de issues
### Resumen de los issues que hicimos en Github:

#### Severidad Grave
1) En Todas las Secciones - La parte para poner filtros no es responsive, para tamaños menores o iguales a 426px no se puede elegir grupo. Al variar el width de pantalla, el botón de reset queda por arriba de los campos de filtros.

2) En sección Favoritos y Predicciones: para anchos menores a 730px, en las listas de partidos pendientes y partidos no realizados no se activa la barra de desplazamiento horizontal, no es visible la información completa.

3) Sidebar - el sidebar no es responsive, para tamaños de pantalla < 632px los elementos de la sección seleccionada quedan ocultos y visualmente "roto" (no se muestran los objetos de la derecha de forma correcta)

#### Severidad Media
1) Mala expresion usada en Favoritos: Partidos no realizados => Partidos que ya se jugaron.

2) En partidos pendientes selecciona por día y no por hora.
Ej:24/11/2022 a la hora 15:00 URU vs COR sigue apareciendo en partidos pendientes y no en la otra sección.

3) En sección resultado-resultado al tocar la estrella se pone en amarillo, pero al tocarlo otra vez para deseleccionar no cambia el color (hay que tocarlo dos veces para que esto pase, sin embargo, la funcionalidad está bien al tocarlo de a una vez).

4) En Partidos - Información de partidos no es responsive para pantallas menores a 350px. Empiezan a "desaparecer datos" a menos que se use scroll horizontal (no queda intuitivo) y los datos/botones aparecen por fuera del cuadro que contenía las cosas.

5) En Partidos y en Predicciones - El funcionamiento de las predicciones no siempre es correcto. Si se confirma hacer predicción sin ingresar datos se la toma como correcta y quedan los campos vacíos. Si se decide modificar los datos actuales (ya sea en sección Partidos o en Predicciones) y solo se cambia 1 valor, al poner confirmar esos cambios se reemplaza el que se queria cambiar pero el que quedaba igual queda vacío.

#### Severidad Baja
1) Al seleccionar una opción de categoría en la sección resultado-resultado y cambiar a resultado-tabla de posiciones no se resetea como si lo hacen los otros campos cuando se seleccionan solos.

2) En sección resultado-resultado al poner el filtro de fecha y cambiar a sección resultado-tabla de posiciones y volver no resetea los partidos con esa fecha, como si lo hace con otros filtros o con el mismo filtro de fecha, pero con otro/s filtros seleccionados.


## Reporte de calidad del sistema

### Sumarizar número de issues reportados por tipo
De los issues que publicamos, 4 estaban relacionados con que tan responsive es la página. Estos se centraban más que nada sobre si en mobile se adaptaba bien a la pantalla o no.
El resto se centraban más en el funcionamiento mismo de cada sección de la página, de cómo funcionaban los filtros o como los valores ingresados actuaban en ciertas condiciones.


### Realizar una evaluación global de la calidad del sistema
En nuestra opinión la página está bien hecha y cumple con su cometido, que es mostrar información de partidos y poder hacer predicciones de resultados, más que nada para usarla desde la web de una computadora ya que su pantalla es más grande y aquí no tiene problemas de responsive. En cuanto a diseño se usó los colores y fonts pedidos en la letra y por cómo fue diseñado la forma en que se llega a la información lleva un par de pasos, pero no es nada abrumador. El problema mayor es como se vería en dispositivos móviles, ya que en varias secciones no es muy intuitivo y además no se puede ver muy bien la información si la pantalla tiene un width muy chico.