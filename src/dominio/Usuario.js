class Usuario {
  constructor(dataArray) {
    this.seleccionesFavoritas = dataArray['seleccionesFavoritas'];
  }
  getUsuario() {
    return {
      seleccionesFavoritas: this.seleccionesFavoritas,
    };
  }
}
module.exports = Usuario;
