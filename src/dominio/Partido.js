class Partido {
  constructor(dataArray) {
    this.nombre = dataArray['nombre'];
    this.selecciones = dataArray['selecciones'];
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
}
module.exports = Partido;
