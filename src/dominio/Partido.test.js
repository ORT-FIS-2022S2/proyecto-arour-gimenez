import Partido from './Partido.js';

describe('Partido', ()=>{
  let partido;

  beforeEach(()=>{
    partido = new Partido();
  });


  test('agregar en un partido una seleccion invalida', ()=>{
    expect(()=>partido.setPartido('Chile', 'Ecuador',
        'Lun 21 Nov 22', '13:00 hs')).toThrow();
  });
  test('agregar un partido valido', ()=>{
    partido.setPartido('Qatar', 'Ecuador', 'Lun 20 Nov 22', '13:00 hs');
    expect(partido.getPartido()).toEqual(partido);
  });
});
