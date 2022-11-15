import Partido from './Partido.js';

describe('Partido', ()=>{
  let partido;

  beforeEach(()=>{
    partido = new Partido();
  });


  test('agregar un partido valido', ()=>{
    expect(partido.setPartido('Qatar', 'Ecuador', 'Lun 20 Nov 22', '13:00 hs')).
        toBe(partido.getPartido());
  });


  test('agregar mismo partido cambiando dia', ()=>{
    expect(partido.setPartido('Qatar', 'Ecuador', 'Lun 21 Nov 22', '13:00 hs')).
        toBe(partido.getPartido());
  });

  test('agregar mismo partido cambiando hora', ()=>{
    expect(partido.setPartido('Qatar', 'Ecuador', 'Lun 21 Nov 22', '16:00 hs')).
        toBe(partido.getPartido());
  });
});
