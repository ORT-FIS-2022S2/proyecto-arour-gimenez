import Seleccion from './Seleccion.js';
const seleccion= new Seleccion();
export default class Partido {
  constructor(nombre1, nombre2, fecha, hora) {
    this.nombre1 = nombre1;
    this.nombre2 = nombre2;
    this.fecha = fecha;
    this.hora = hora;
  }
  getPartido() {
    return {
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      fecha: this.fecha,
      hora: this.hora,
    };
  }
  setPartido(seleccion1, seleccion2, fecha, hora) {
    if (seleccion.esSeleccion(seleccion1) &&
      seleccion.esSeleccion(seleccion2)) {
      this.nombre1 = seleccion1;
      this.nombre2 = seleccion2;
      this.fecha = fecha;
      this.hora = hora;
    } else {
      throw new Error('Nombre de seleccion no valido.');
    }
  }
}

