import ListaPartidos from './lista-partidos.js';
import Partido from './Partido.js';

describe('ListaPartidos', ()=>{
  let listapartido;
  const partido1 = new Partido('Qatar', 'Ecuador', 'Lun 20 Nov 22', '13:00 hs');
  const partido2 = new Partido('Qatar', 'Ecuador', 'Lun 21 Nov 22', '13:00 hs');
  const partido3 = new Partido('Qatar', 'Ecuador', 'Lun 21 Nov 22', '16:00 hs');
  const partido4 = new Partido('Qatar', 'Senegal', 'Lun 20 Nov 22', '13:00 hs');
  const partido5 = new Partido('Holanda'
      , 'Senegal', 'Lun 20 Nov 22', '13:00 hs');
  const partido6 = new Partido('Ghana', 'Uruguay', 'Lun 20 Nov 22', '13:00 hs');
  beforeEach(()=>{
    listapartido = new ListaPartidos();
  });


  test('agregar un partido valido', ()=>{
    expect(listapartido.setPartidos(partido1)).
        toBe(listapartido[listapartido.length-1]);
  });

  test('agregar un partido invalido', ()=>{
    listapartido.setPartidos(partido1);
    expect(()=>listapartido.setPartidos(partido1)).toThrow();
  });

  test('agregar mismo partido cambiando dia', ()=>{
    expect(listapartido.setPartidos(partido2)).
        toBe(listapartido[listapartido.length-1]);
  });

  test('agregar mismo partido cambiando hora', ()=>{
    expect(listapartido.setPartidos(partido3)).
        toBe(listapartido[listapartido.length-1]);
  });

  test('agregar todos los partidos', ()=>{
    expect(listapartido.cargarListaPartidos()).
        toBe(listapartido.getPartidos());
  });

  test('partido valido y otro con una misma sele pero con la misma fecha', ()=>{
    listapartido.setPartidos(partido1);
    expect(()=>listapartido.setPartidos(partido4)).toThrow();
  });

  test('partido valido y otro con una misma sele pero con la misma fecha', ()=>{
    listapartido.setPartidos(partido4);
    expect(()=>listapartido.setPartidos(partido5)).toThrow();
  });

  test('dos partidos diferentes con la misma fecha', ()=>{
    listapartido.setPartidos(partido4);
    expect(listapartido.setPartidos(partido6)).
        toBe(listapartido[listapartido.length-1]);
  });
});
