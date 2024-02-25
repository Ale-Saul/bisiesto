import bisiesto from './bisiesto';

describe('bisiesto', () => {
  it('deberia devolver "Es bisiesto" si el año es divisible por 400', () => {
    expect(bisiesto(1600)).toEqual("Es bisiesto");
  });
    it('deberia devolver "No es bisiesto" si el año es divisible por 100 pero no por 400', () => {
        expect(bisiesto(1700)).toEqual("No es bisiesto");
    });
});