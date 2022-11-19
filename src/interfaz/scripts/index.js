// import { MDCRipple } from '@material/ripple';
// import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
// import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
// import {MDCSnackbar} from '@material/snackbar';
// import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
// import Pelicula from '../../dominio/pelicula.mjs';
// import {MDCList} from '@material/list';
import ListaPartidos from '../../dominio/lista-partidos.js';
// import Partido from '../../dominio/Partido.js';
// import Pronostico from '../../dominio/Pronostico';
// import Seleccion from '../../dominio/Seleccion';
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';



//elegir seleccion
const select = new MDCSelect(document.querySelector('.mdc-select'));
select.listen('MDCSelect:change', () => {
  genera_tabla(select.value);
});
//elegir seleccion

//tablas
// import {MDCDataTable} from '@material/data-table';
//const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
//tablas

// const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
//   return new MDCRipple(el);
// });

// let partido1 = new Partido();
// partido1.setPartido('Qatar', 'Ecuador', '20-Nov-22', '13:00');
// listaPartidos.agregar(partido1);

// const listaPeliculas = new ListaPeliculas();
const listaPartidos = new ListaPartidos();
listaPartidos.cargarListaPartidos();
// const partido = new Partido();

// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

// const textFieldTitle = new MDCTextField(document.getElementById('title'));
// const textFieldYear = new MDCTextField(document.getElementById('year'));
// const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   let title = textFieldTitle.value;
//   let year = textFieldYear.value;
//   let genre = selectGenre.value;
//   borrarCampos();

//   try {
//     let newPelicula = new Pelicula('title', genre, year);
//     listaPeliculas.agregar(newPelicula);
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = 'Pelicula agregada correctamente';
//     snackbar.open();

//   } catch (error) {
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = error.message;
//     snackbar.open();
//   } finally {
//     let peliculas = listaPeliculas.getPeliculas();
//     console.log(peliculas);
//     cargarListaPeliculas();

//   }
// })

// function borrarCampos(){
//   textFieldTitle.value = "";
//   textFieldYear.value = "";
//   selectGenre.value = "";
// }

// function cargarListaPeliculas(){
//   let peliculas = listaPeliculas.getPeliculas();
//   let lista = document.getElementById('peliculas');
//   lista.innerHTML = "";

//   for(let i = 0; i < peliculas.length; i++){
//     let pelicula = peliculas[i];

//     //div principal
//     let fila = document.createElement('div');
//     fila.className = "mdc-card";

//     //div primary action
//     let div = document.createElement('div');
//     div.className = "mdc-card__primary-action";

//     //info pelicula
//     let informacion = document.createElement("h2")
//     informacion.innerHTML = pelicula.titulo + " (" + pelicula.anio + ")" + " - " + pelicula.genero;
//     div.appendChild(informacion);

//     //div mdc-card media square
//     let divMediaSquare = document.createElement('div');
//     divMediaSquare.className = "mdc-card__media mdc-card__media--square";
//     div.appendChild(divMediaSquare);

//     //div mdc-card media content
//     let divMediaContent = document.createElement('div');
//     divMediaContent.className = "mdc-card__media-content";
//     divMediaSquare.appendChild(divMediaContent);

//     //div mdc ripple
//     let divRipple = document.createElement('div');
//     divRipple.className = "mdc-card__ripple";
//     div.appendChild(divRipple);

//     fila.appendChild(div);
//     lista.appendChild(fila);

//     let saltoLinea = document.createElement('br');
//     lista.appendChild(saltoLinea);
//   }
// }

// function cambiarContenidoCeldaTabla(valor, f ,c ,id) {
//     let fila = f;
//     let columna = c;
//     if ((fila >= 1 && fila <= 3) && (columna >= 1 && columna <= 4)) {
//         let celdas = document.getElementById(id).rows[fila - 1].cells;
//         celdas[columna - 1] = valor;
//     }
// }


  
  
function genera_tabla(select) {
  // const partido1 = new Partido('Qatar', 'Ecuador', '20 Nov 22', '13:00');
  // listaPartidos.agrega(partido1);
  
  let partidos = listaPartidos.getPartidos(); 
 
  let lista = document.getElementById('partidos');
  lista.innerHTML = "";
  
  //ul
  let fila = document.createElement('ul');
  fila.className = "mdc-list mdc-list--two-line";
  fila.setAttribute("id", "select");
  //linea separadora
  let li2 = document.createElement('li');
  li2.role = "separator";
  li2.className = "mdc-list-divider";
  li2.setAttribute("tabindex","0");
  li2.style.textAlign = "center";

  fila.appendChild(li2);
  //linea separadora
  let saltoLinea2 = document.createElement('br');
  fila.appendChild(saltoLinea2);
      
  for(let i = 0; i < partidos.length; i++){
    
     if(partidos[i].nombre1 === select || partidos[i].nombre2 === select){
      let partido = partidos[i];

      //li
      let li = document.createElement('li');
      li.className = "mdc-list-item";
      li.setAttribute("tabindex","0");
      
      //span
      let spann = document.createElement('span');
      spann.setAttribute("class","mdc-list-item__ripple");   
      li.appendChild(spann);
      
      //span2
      let span2 = document.createElement('span');
      span2.setAttribute("class","mdc-list-item__text");  
      
      //info partido
      let informacionspan1 = document.createElement('span');
      informacionspan1.setAttribute("class","mdc-list-item__primary-text");   
      informacionspan1.appendChild(document.createTextNode(partido.nombre1+' vs ' + partido.nombre2 + " "));
      
      // informacionspan1.appendChild(img);

      span2.appendChild(informacionspan1);

      //fecha y hora del partido
      let informacionspan2 = document.createElement('span');
      informacionspan2.setAttribute("class","mdc-list-item__secondary-text");
      informacionspan2.appendChild(document.createTextNode(" " + partido.fecha +' - '+ partido.hora))
      span2.appendChild(informacionspan2);

      li.appendChild(span2);
      fila.appendChild(li);

      let saltoLinea = document.createElement('br');
      fila.appendChild(saltoLinea);

      //linea separadora
      let li2 = document.createElement('li');
      li2.role = "separator";
      li2.className = "mdc-list-divider";
      li2.setAttribute("tabindex","0");
      li2.style.textAlign = "center";

      fila.appendChild(li2);
      //linea separadora

      let saltoLinea2 = document.createElement('br');
      fila.appendChild(saltoLinea2);

    }
    lista.appendChild(fila);
  }
}

genera_Pronostico();

//////////////////////
function genera_Pronostico() {
  let partidos = listaPartidos.getPartidos(); 
 
  let lista = document.getElementById('pronosticos');
  lista.innerHTML = "";
  
  //ul
  let fila = document.createElement('ul');
  fila.className = "mdc-list mdc-list--two-line";
  fila.setAttribute("id","lista2");

  //linea separadora
  let li2 = document.createElement('li');
  li2.role = "separator";
  li2.className = "mdc-list-divider";
  li2.setAttribute("tabindex","0");
  li2.style.textAlign = "center";

  fila.appendChild(li2);
  //linea separadora
  let saltoLinea2 = document.createElement('br');
  fila.appendChild(saltoLinea2);
      
  for(let i = 0; i < partidos.length; i++){
      let partido = partidos[i];
      let divporfura = document.createElement('div');

      //li
      let li = document.createElement('li');
      li.className = "mdc-list-item";
      li.setAttribute("tabindex","0");
      li.setAttribute("id","lista1");
      
      //span
      let spann = document.createElement('span');
      spann.setAttribute("class","mdc-list-item__ripple");   
      li.appendChild(spann);
      
      //span2
      let span2 = document.createElement('span');
      span2.setAttribute("class","mdc-list-item__text");   

      //info partido
      let informacionspan1 = document.createElement('span');
      informacionspan1.setAttribute("class","mdc-list-item__primary-text");   
      informacionspan1.appendChild(document.createTextNode(partido.nombre1+' vs ' + partido.nombre2 + " "));
      //informacionspan1.appendChild(document.createTextNode(partido.nombre1+' vs ' + partido.nombre2 +' - ' + partido.fecha +' - '+ partido.hora));
      span2.appendChild(informacionspan1);

      //fecha y hora del partido
      let informacionspan2 = document.createElement('span');
      informacionspan2.setAttribute("class","mdc-list-item__secondary-text");
      informacionspan2.appendChild(document.createTextNode(" " + partido.fecha +' - '+ partido.hora))
      span2.appendChild(informacionspan2);
      
      //radio button
      
      
      let div1 = document.createElement('div');
      let texto = document.createElement('h4');
      texto.textContent="Elegir ganador:";
      div1.appendChild(texto);
      radioButton(i,partido.nombre2,div1);
      radioButton(i,partido.nombre2,div1);
      radioButton(i,"Empata",div1);
      span2.appendChild(div1);
      
      li.appendChild(span2);
      divporfura.appendChild(li);
      fila.appendChild(divporfura);

      let saltoLinea = document.createElement('br');
      fila.appendChild(saltoLinea);

      //linea separadora
      let li2 = document.createElement('li');
      li2.role = "separator";
      li2.className = "mdc-list-divider";
      li2.setAttribute("tabindex","0");
      li2.style.textAlign = "center";

      fila.appendChild(li2);
      //linea separadora

      let saltoLinea2 = document.createElement('br');
      fila.appendChild(saltoLinea2);
  }
  lista.appendChild(fila);
  
}


function radioButton(i,nom1,div){
  //radio button
 

  div.setAttribute("class","mdc-form-field");
  let div2 = document.createElement('div');
  div2.setAttribute("class","mdc-radio");

  let inputgana = document.createElement('input');
  inputgana.setAttribute("class","mdc-radio__native-control");
  inputgana.setAttribute("type","radio");
  inputgana.setAttribute("id","radio-1");
  inputgana.setAttribute("name",i);
  div2.appendChild(inputgana);
  
  
  // let inputpierde = document.createElement('input');
  // inputpierde.setAttribute("class","mdc-radio__native-control");
  // inputpierde.setAttribute("type","radio");
  // inputpierde.setAttribute("id","radio-2");
  // inputpierde.setAttribute("name",i);
  // div2.appendChild(inputpierde);

  // let lavelpierde = document.createElement('lavel');
  // lavelpierde.setAttribute("for","radio-2");
  // lavelpierde.textContent= nom2;
  // div2.appendChild(lavelpierde);

  // let inputempata = document.createElement('input');
  // inputempata.setAttribute("class","mdc-radio__native-control");
  // inputempata.setAttribute("type","radio");
  // inputempata.setAttribute("id","radio-3");
  // inputempata.setAttribute("name",i);
  // div2.appendChild(inputempata);

  // let lavelempata = document.createElement('lavel');
  // lavelempata.setAttribute("for","radio-3");
  // lavelempata.textContent="Empate";
  
  // div2.appendChild(lavelempata); 

  let div3 = document.createElement('div');
  div3.setAttribute("class","mdc-radio__background");
  let div4 = document.createElement('div');
  div4.setAttribute("class","mdc-radio__outer-circle");
  div3.appendChild(div4);
  let div5 = document.createElement('div');
  div5.setAttribute("class","mdc-radio__inner-circle");
  div3.appendChild(div5);
  div2.appendChild(div3);
  let div6 = document.createElement('div');
  div6.setAttribute("class","mdc-radio__ripple");
  div2.appendChild(div6);
  div.appendChild(div2);
  let lavelgana = document.createElement('lavel');
  lavelgana.setAttribute("for","radio-1");
  lavelgana.textContent=nom1;
  div.appendChild(lavelgana);  
}
