class Seleccion {
  constructor(dataArray) {
    this.nombre = dataArray['nombre'];
    this.pj = 0;
    this.dif = 0;
    this.p = 0;
    this.gmarcados = 0;
    this.grecividos = 0;
  }
  getSeleccion() {
    return {
      nombre: this.nombre,
      pj: this.pj,
      dif: this.dif,
      p: this.p,
      gmarcados: this.gmarcados,
      grecividos: this.grecividos,
    };
  }
  setSeleccion(p, gmarcados, grecividos) {
    this.pj += 1;
    this.p += p;
    this.dif = gmarcados / grecividos;
  }
}
module.exports = Seleccion;
