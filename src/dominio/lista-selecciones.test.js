import ListaPartidos from './lista-selecciones.js';

describe('ListaSelecciones', ()=>{
  let listaselecciones;
  beforeEach(()=>{
    listaselecciones = new ListaPartidos();
  });


  test('agregar selecciones', ()=>{
    expect(listaselecciones.cargarListaSelecciones()).
        toBe(listaselecciones.getSelecciones());
  });

  test('agregar banderas', ()=>{
    expect(listaselecciones.cargarListaBanderas()).
        toBe(listaselecciones.getBanderas());
  });
});
