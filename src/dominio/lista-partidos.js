import Partido from '../dominio/Partido.js';

export default class ListaPartidos {
  constructor() {
    this.partidos = [];
  }
  setPartidos(partido) {
    const actual = this.partidos.some( (m) => (m.fecha == partido.fecha) &&
     (m.hora == partido.hora) && (((m.nombre1 == partido.nombre1)||
     (m.nombre1 == partido.nombre2)) || ((m.nombre2 == partido.nombre2)||(
      m.nombre2==partido.nombre1))));
    if (!actual) {
      this.partidos.push(partido);
    } else {
      throw new Error(`No se pudo agregar.Ya existe el partido o por lo menos una de las seleccionesya tiene partido en esa fecha.`)
    }
  }
  getPartidos() {
    return this.partidos;
  }
  cargarListaPartidos() {
    const j1=new Partido('Qatar', 'Ecuador', 'Dom 20 Nov 22', '13:00 hs');
    this.partidos.push(j1);
    const j2=new Partido('Senegal', 'Holanda', 'Lun 21 Nov 22', '7:00 hs');
    this.partidos.push(j2);
    const j3=new Partido('Inglaterra', 'Irán', 'Lun 21 Nov 22', '10:00 hs');
    this.partidos.push(j3);
    const j4=new Partido('Estados Unidos', 'Gales',
        'Lun 21 Nov 22', '16:00 hs');
    this.partidos.push(j4);
    const j5=new Partido('Argentina', 'Arabia Saudita',
        'Mar 22 Nov 22', '7:00 hs');
    this.partidos.push(j5);
    const j6=new Partido('Dinamarca', 'Túnez', 'Mar 22 Nov 22', '10:00 hs');
    this.partidos.push(j6);
    const j7=new Partido('México', 'Polonia', 'Mar 22 Nov 22', '13:00 hs');
    this.partidos.push(j7);
    const j8=new Partido('Francia', 'Australia', 'Mar 22 Nov 22', '16:00 hs' );
    this.partidos.push(j8);
    const j9=new Partido('Marruecos', 'Croacia', 'Mie 23 Nov 22', '7:00 hs' );
    this.partidos.push(j9);
    const j10=new Partido('Alemania', 'Japón', 'Mie 23 Nov 22', '10:00 hs' );
    this.partidos.push(j10);
    const j11=new Partido('España', 'Costa Rica', 'Mie 23 Nov 22', '13:00 hs');
    this.partidos.push(j11);
    const j12=new Partido('Bélgica', 'Canadá', 'Mie 23 Nov 22', '16:00 hs');
    this.partidos.push(j12);
    const j13=new Partido('Suiza', 'Camerún', 'Jue 24 Nov 22', '7:00 hs');
    this.partidos.push(j13);
    const j14=new Partido('Uruguay', 'Corea del Sur',
        'Jue 24 Nov 22', '10:00 hs');
    this.partidos.push(j14);
    const j15=new Partido('Portugal', 'Ghana', 'Jue 24 Nov 22', '13:00 hs' );
    this.partidos.push(j15);
    const j16=new Partido('Brasil', 'Serbia', 'Jue 24 Nov 22', '16:00 hs');
    this.partidos.push(j16);
    const j17=new Partido('Gales', 'Irán', 'Vie 25 Nov 22', '7:00 hs' );
    this.partidos.push(j17);
    const j18=new Partido('Qatar', 'Senegal', 'Vie 25 Nov 22', '10:00 hs' );
    this.partidos.push(j18);
    const j19=new Partido('Holanda', 'Ecuador', 'Vie 25 Nov 22', '13:00 hs');
    this.partidos.push(j19);
    const j20=new Partido('Inglaterra', 'Estados Unidos',
        'Vie 25 Nov 22', '16:00 hs');
    this.partidos.push(j20);
    const j21=new Partido('Túnez', 'Australia', 'Sab 26 Nov 22', '7:00 hs' );
    this.partidos.push(j21);
    const j22=new Partido('Polonia', 'Arabia Saudita',
        'Sab 26 Nov 22', '10:00 hs');
    this.partidos.push(j22);
    const j23=new Partido('Francia', 'Dinamarca', 'Sab 26 Nov 22', '13:00 hs');
    this.partidos.push(j23);
    const j24=new Partido('Argentina', 'México', 'Sab 26 Nov 22', '16:00 hs' );
    this.partidos.push(j24);
    const j25=new Partido('Japón', 'Costa Rica', 'Dom 27 Nov 22', '7:00 hs');
    this.partidos.push(j25);
    const j26=new Partido('Bélgica', 'Marruecos', 'Dom 27 Nov 22', '10:00 hs' );
    this.partidos.push(j26);
    const j27=new Partido('Croacia', 'Canadá', 'Dom 27 Nov 22', '13:00 hs');
    this.partidos.push(j27);
    const j28=new Partido('España', 'Alemania', 'Dom 27 Nov 22', '16:00 hs');
    this.partidos.push(j28);
    const j29=new Partido('Camerún', 'Serbia', 'Lun 28 Nov 22', '7:00 hs' );
    this.partidos.push(j29);
    const j30=new Partido('Corea del Sur', 'Ghana',
        'Lun 28 Nov 22', '10:00 hs');
    this.partidos.push(j30);
    const j31=new Partido('Brasil', 'Suiza', 'Lun 28 Nov 22', '13:00 hs');
    this.partidos.push(j31);
    const j32=new Partido('Portugal', 'Uruguay', 'Lun 28 Nov 22', '16:00 hs');
    this.partidos.push(j32);
    const j33=new Partido('Holanda', 'Qatar', 'Mar 29 Nov 22', '12:00 hs');
    this.partidos.push(j33);
    const j34=new Partido('Ecuador', 'Senegal', 'Mar 29 Nov 22', '12:00 hs' );
    this.partidos.push(j34);
    const j35=new Partido('Gales', 'Inglaterra', 'Mar 29 Nov 22', '16:00 hs');
    this.partidos.push(j35);
    const j36=new Partido('Irán', 'Estados Unidos',
        'Mar 29 Nov 22', '16:00 hs');
    this.partidos.push(j36);
    const j37=new Partido('Túnez', 'Francia', 'Mie 30 Nov 22', '12:00 hs');
    this.partidos.push(j37);
    const j38=new Partido('Australia', 'Dinamarca',
        'Mie 30 Nov 22', '12:00 hs');
    this.partidos.push(j38);
    const j39=new Partido('Polonia', 'Argentina', 'Mie 30 Nov 22', '16:00 hs');
    this.partidos.push(j39);
    const j40=new Partido('Arabia Saudita', 'México',
        'Mie 30 Nov 22', '16:00 hs');
    this.partidos.push(j40);
    const j41=new Partido('Croacia', 'Bélgica', 'Jue 1 Dic 22', '12:00 hs' );
    this.partidos.push(j41);
    const j42=new Partido('Canadá', 'Marruecos', 'Jue 1 Dic 22', '12:00 hs' );
    this.partidos.push(j42);
    const j43=new Partido('Japón', 'España', 'Jue 1 Dic 22', '16:00 hs');
    this.partidos.push(j43);
    const j44=new Partido('Costa Rica', 'Alemania', 'Jue 1 Dic 22', '16:00 hs');
    this.partidos.push(j44);
    const j45=new Partido('Corea del Sur', 'Portugal',
        'Vie 2 Dic 22', '12:00 hs');
    this.partidos.push(j45);
    const j46=new Partido('Ghana', 'Uruguay', 'Vie 2 Dic 22', '12:00 hs');
    this.partidos.push(j46);
    const j47=new Partido('Camerún', 'Brasil', 'Vie 2 Dic 22', '16:00 hs');
    this.partidos.push(j47);
    const j48=new Partido('Serbia', 'Suiza', 'Vie 2 Dic 22', '16:00 hs' );
    this.partidos.push(j48);
    return this.partidos;
  }
}
