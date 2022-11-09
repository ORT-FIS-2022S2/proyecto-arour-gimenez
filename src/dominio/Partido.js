class Partido {
  constructor(dataArray) {
    this.nombre1 = '';
    this.nombre2 = '';
    this.selecciones = [];
    this.fecha = new Date(dataArray['fecha']);
    this.hora = new Date(dataArray['hora']);
  }
  getPartido() {
    return {
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      selecciones: this.selecciones,
      fecha: this.fecha,
      hora: this.hora,
    };
  }
  setPartido(seleccion1, seleccion2, fecha, hora) {
    this.nombre1 = seleccion1;
    this.nombre2 = seleccion2;
    this.selecciones.push(seleccion1, seleccion2);
    this.fecha.push(fecha);
    this.hora.push(hora);
  }
}
module.exports = Partido;
