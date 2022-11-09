class Pronostico {
  constructor(dataArray) {
    this.pronosticos = [];
  }
  getPronostico() {
    return this.pronosticos;
  }
  setPronostico(gana) {
    const ganador = this.pronosticos.some((m) => m.nombre == gana.nombre);
    if (!ganador) {
      this.pronosticos.push(gana);
    } else {
      throw new Error(`No se pudo agregar. ${gana.nombre} ya se encuentra en pronosticos.`);
    }
  }
}
module.exports = Pronostico;
