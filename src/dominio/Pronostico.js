class Pronostico {
  constructor(dataArray) {
    this.ganador = dataArray['ganador'];
  }
  getPronostico() {
    return {
      ganador: this.ganador,
    };
  }
  setPronostico(gana) {
    this.ganador= gana;
  }
}
module.exports = Pronostico;
