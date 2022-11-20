import Pronostico from './Pronostico.js';

describe('Pronostico', ()=>{
  let pronostico;

  beforeEach(()=>{
    pronostico = new Pronostico();
  });


  test('agregar un pronostico valido', ()=>{
    expect(pronostico.setPronostico('Uruguay-Jue 24 Nov 22 - 10:00 hs')).
        toBe(pronostico[pronostico.length-1]);
  });

  test('probar get', ()=>{
    pronostico.setPronostico('Uruguay-Jue 24 Nov 22 - 10:00 hs');
    expect(pronostico.getPronostico()).
        toBe(pronostico);
  });

  test('agregar un pronostico ya ingresado', ()=>{
    pronostico.setPronostico('Uruguay-Jue 24 Nov 22 - 10:00 hs');
    expect(()=>pronostico.setPronostico('Uruguay-Jue 24 Nov 22 - 10:00 hs')).
        toThrow();
  });
});
