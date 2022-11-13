class Seleccion {
  constructor(nombrePais) {
    this.nombre = nombrePais;
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
    this.gmarcados += gmarcados;
    this.grecividos += grecividos;
    this.dif = gmarcados / grecividos;
  }
}
// const alemania = new Seleccion('Alemania');
// const arabiaSaudita = new Seleccion('Arabia Saudita');
// const argentina = new Seleccion('Argentina');
// const australia = new Seleccion('Australia');
// const brasil = new Seleccion('Brasil');
// const belgica = new Seleccion('Bélgica');
// const camerun = new Seleccion('Camerún');
// const canada = new Seleccion('Canadá');
// const coreaS = new Seleccion('Corea del Sur');
// const costaRica = new Seleccion('Costa Rica');
// const croacia = new Seleccion('Croacia');
// const dinamarca = new Seleccion('Dinamarca');
// const ecuador = new Seleccion('Ecuador');
// const spain = new Seleccion('España');
// const usa = new Seleccion('Estados Unidos');
// const francia = new Seleccion('Francia');
// const gales = new Seleccion('Gales');
// const ghana = new Seleccion('Ghana');
// const holanda = new Seleccion('Holanda');
// const inglaterra = new Seleccion('Inglaterra');
// const iran = new Seleccion('Irán');
// const japon = new Seleccion('Japon');
// const marruecos = new Seleccion('Marruecos');
// const mexico = new Seleccion('México');
// const polonia = new Seleccion('Polonia');
// const portugal = new Seleccion('Portugal');
// const qatar = new Seleccion('Qatar');
// const senegal = new Seleccion('Senegal');
// const serbia = new Seleccion('Serbia');
// const suiza = new Seleccion('Suiza');
// const tuñez = new Seleccion('Tuñez');
// const uruguay = new Seleccion('Uruguay');

module.exports = Seleccion;
