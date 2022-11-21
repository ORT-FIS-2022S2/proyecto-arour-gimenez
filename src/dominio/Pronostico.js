export default class Pronostico {
  constructor() {
    this.pronosticos = [];
  }
  getPronostico() {
    return this.pronosticos;
  }
  setPronostico(res) {
    const resultado = this.pronosticos.some((m) => m.nombre == res.nombre);
    if (!resultado) {
      this.pronosticos.push(res);
    } else {
      throw new Error(`No se pudo agregar. 
      ${res.nombre} ya se encuentra en pronosticos.`);
    }
  }
}

