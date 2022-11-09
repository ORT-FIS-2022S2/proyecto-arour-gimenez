import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';

//elegir seleccion
const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
  genera_tabla(select.value);
});
//elegir seleccion

//tablas
import {MDCDataTable} from '@material/data-table';
import ListaPartidos from '../../dominio/lista-partidos.js';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
//tablas

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});


const listaPeliculas = new ListaPeliculas();
const listaPartidos = new ListaPartidos();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

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

const textFieldTitle = new MDCTextField(document.getElementById('title'));
const textFieldYear = new MDCTextField(document.getElementById('year'));
const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  borrarCampos();

  try {
    let newPelicula = new Pelicula(title, genre, year);
    listaPeliculas.agregar(newPelicula);
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = 'Pelicula agregada correctamente';
    snackbar.open();

  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
    cargarListaPeliculas();

  }
})

function borrarCampos(){
  textFieldTitle.value = "";
  textFieldYear.value = "";
  selectGenre.value = "";
}

function cargarListaPeliculas(){
  let peliculas = listaPeliculas.getPeliculas();
  let lista = document.getElementById('peliculas');
  lista.innerHTML = "";

  for(let i = 0; i < peliculas.length; i++){
    let pelicula = peliculas[i];

    //div principal
    let fila = document.createElement('div');
    fila.className = "mdc-card";

    //div primary action
    let div = document.createElement('div');
    div.className = "mdc-card__primary-action";

    //info pelicula
    let informacion = document.createElement("h2")
    informacion.innerHTML = pelicula.titulo + " (" + pelicula.anio + ")" + " - " + pelicula.genero;
    div.appendChild(informacion);

    //div mdc-card media square
    let divMediaSquare = document.createElement('div');
    divMediaSquare.className = "mdc-card__media mdc-card__media--square";
    div.appendChild(divMediaSquare);

    //div mdc-card media content
    let divMediaContent = document.createElement('div');
    divMediaContent.className = "mdc-card__media-content";
    divMediaSquare.appendChild(divMediaContent);

    //div mdc ripple
    let divRipple = document.createElement('div');
    divRipple.className = "mdc-card__ripple";
    div.appendChild(divRipple);

    fila.appendChild(div);
    lista.appendChild(fila);

    let saltoLinea = document.createElement('br');
    lista.appendChild(saltoLinea);
    
    

  }
}
function cambiarContenidoCeldaTabla(valor, f ,c ,id) {
    let fila = f;
    let columna = c;

    if ((fila >= 1 && fila <= 3) && (columna >= 1 && columna <= 4)) {
        let celdas = document.getElementById(id).rows[fila - 1].cells;
        celdas[columna - 1] = valor;
    }
}

function genera_tabla(select) {
  let partidos = listaPartidos.getPartidos();
  let lista = document.getElementById('partidos');
  lista.innerHTML = "";

  for(let i = 0; i < partidos.length; i++){
    if(partidos[i] === select){
    let partido = partidos[i];

    //div principal
    let fila = document.createElement('div');
    fila.className = "mdc-list";

    //div primary action
    let div = document.createElement('div');
    div.className = "mdc-list-item__text";

    //info partido
    let informacion = document.createElement("h2")
    informacion.innerHTML = partido.nombre + " (" + partido.hora + ")" + " - " + partido.fecha;
    div.appendChild(informacion);

    

    //div mdc ripple
    let divRipple = document.createElement('div');
    divRipple.className = "mdc-list-item__ripple";
    div.appendChild(divRipple);

    fila.appendChild(div);
    lista.appendChild(fila);

    let saltoLinea = document.createElement('br');
    lista.appendChild(saltoLinea);
    
    
  }
  }
}