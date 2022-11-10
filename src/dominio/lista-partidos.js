export default class ListaPartidos {
  constructor() {
    // this.partidos = ['Alemania', 'Arabia Saudita', 'Argentina', 'Australia',
    //   'Brasil',
    //   'Bélgica',
    //   'Camerún',
    //   'Canadá',
    //   'Corea del Sur',
    //   'Costa Rica',
    //   'Croacia',
    //   'Dinamarca',
    //   'Ecuador',
    //   'España',
    //   'Estados Unidos',
    //   'Francia',
    //   'Gales',
    //   'Ghana',
    //   'Holanda',
    //   'Inglaterra',
    //   'Irán',
    //   'Japón',
    //   'Marruecos',
    //   'México',
    //   'Polonia',
    //   'Portugal',
    //   'Qatar',
    //   'Senegal',
    //   'Serbia',
    //   'Suiza',
    //   'Túnez',
    //   'Uruguay'];
    this.partidos = [];
  }
  agregar(partido) {
    // const actual = this.partidos;
    // if (!actual) {
    this.partidos.push(partido);
    // } else {
    //   throw new Error(`No se pudo agregar.
    //     ${pelicula.titulo} ya se encuentra en cartelera.`);
    // }
  }
  getPartidos() {
    return this.partidos;
  }
}
// ListaPartidos.a
