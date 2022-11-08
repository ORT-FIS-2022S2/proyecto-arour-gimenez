class Partido {
  constructor(dataArray) {
    this.selecciones = [];
    this.fecha = new Date(dataArray['fecha']);
    this.hora = new Date(dataArray['hora']);
  }
  getPartido() {
    return {
      nombre: this.nombre,
      selecciones: this.selecciones,
      fecha: this.fecha,
      hora: this.hora,
    };
  }
  setPartido(seleccion1, seleccion2, fecha, hora) {
    this.selecciones.push(seleccion1, seleccion2);
    this.fecha.push(fecha);
    this.hora.push(hora);
  }
}
module.exports = Partido;
