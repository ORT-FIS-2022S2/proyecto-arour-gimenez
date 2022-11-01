class Seleccion {
  constructor(dataArray) {
    this.nombre = dataArray['nombre'];
    this.bandera = dataArray['bandera'];
  }
  getSeleccion() {
    return {
      nombre: this.nombre,
      bandera: this.bandera,
    };
  }
}
module.exports = Seleccion;
