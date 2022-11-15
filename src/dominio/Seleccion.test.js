import Seleccion from './Seleccion.js';

describe('Seleccion', ()=>{
  let seleccion;

  beforeEach(()=>{
    seleccion = new Seleccion();
  });


  test('es seleccion valida', ()=>{
    expect(seleccion.setSeleccion('Uruguay')).
        toBe(seleccion[seleccion.length-1]);
  });

  test('es seleccion invalida', ()=>{
    expect(()=>seleccion.setSeleccion('Chile')).toThrow();
  });
});
