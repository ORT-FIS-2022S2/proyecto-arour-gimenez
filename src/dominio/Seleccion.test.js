import Seleccion from './Seleccion.js';

describe('Seleccion', ()=>{
  let seleccion;

  beforeEach(()=>{
    seleccion = new Seleccion();
  });


  test('es seleccion valida', ()=>{
    expect(seleccion.esSeleccion('Uruguay')).
        toBe(true);
  });

  test('es seleccion invalida', ()=>{
    expect(seleccion.esSeleccion('Chile')).toBe(false);
  });

  test('set seleccion valida', ()=>{
    expect(seleccion.setSeleccion('Uruguay')).
        toBe(seleccion[seleccion.length-1]);
  });

  test('set seleccion invalida', ()=>{
    expect(()=>seleccion.setSeleccion('Chile')).toThrow();
  });

  test('hacer cambios en seleccion valida', ()=>{
    seleccion.setSeleccion('Uruguay');
    expect(seleccion.setCambiosASeleccion(0, 3, 1)).
        toBe(seleccion[seleccion.length-1]);
  });

  test('funcion get seleccion valida', ()=>{
    seleccion.setSeleccion('Qatar');
    expect(seleccion.getSeleccion()).toEqual(seleccion);
  });

  test('set seleccion valida', ()=>{
    expect(()=>seleccion = new Seleccion('Chile')).
        toThrow();
  });
});
