import ListaSelecciones from './lista-selecciones.js';
export default class Seleccion {
  constructor(nombrePais) {
    if (this.esSeleccion(nombrePais) === true) {
      this.nombre = nombrePais;
      this.pj = 0;
      this.dif = 0;
      this.p = 0;
      this.gmarcados = 0;
      this.grecividos = 0;
    } else {
      throw new Error(`Nombre de seleccion no valido.`);
    }
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
  setCambiosASeleccion(p, gmarcados, grecividos) {
    this.pj += 1;
    this.p += p;
    this.gmarcados += gmarcados;
    this.grecividos += grecividos;
    this.dif = gmarcados / grecividos;
  }
  setSeleccion(nombrePais) {
    if (this.esSeleccion(nombrePais) === true) {
      this.nombre = nombrePais;
      this.pj = 0;
      this.dif = 0;
      this.p = 0;
      this.gmarcados = 0;
      this.grecividos = 0;
    } else {
      throw new Error(`Nombre de seleccion no valido.`);
    }
  }
  esSeleccion(equipo) {
    let selecciones=new ListaSelecciones();
    selecciones.cargarListaSelecciones();
    selecciones= selecciones.getSelecciones();
    let res;
    if (selecciones.find((element) => element == equipo) === equipo) {
      res= true;
    } else {
      res= false;
    }
    return res;
  }
}
