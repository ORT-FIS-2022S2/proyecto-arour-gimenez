class Pronostico {
  constructor(dataArray) {
    this.ganador = dataArray['ganador'];
  }
  getPronostico() {
    return {
      ganador: this.ganador,
    };
  }
}
module.exports = Pronostico;
