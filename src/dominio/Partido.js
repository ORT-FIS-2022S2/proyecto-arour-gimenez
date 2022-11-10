// import ListaPartidos from './lista-partidos.js';
class Partido {
  constructor(dataArray) {
    this.nombre1 = '';
    this.nombre2 = '';
    // this.selecciones = [];
    this.fecha = '';
    this.hora = '';
  }
  getPartido() {
    return {
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      // selecciones: this.selecciones,
      fecha: this.fecha,
      hora: this.hora,
    };
  }
  setPartido(seleccion1, seleccion2, fecha, hora) {
    this.nombre1 = seleccion1;
    this.nombre2 = seleccion2;
    // this.selecciones.push(seleccion1, seleccion2);
    this.fecha = fecha;
    this.hora = hora;
  }
}
// const partido1 = new Partido();
// partido1.setPartido('Qatar', 'Ecuador', '20-Nov-22', '13:00');
// ListaPartidos.
export default Partido;
