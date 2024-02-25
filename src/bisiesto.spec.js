import bisiesto from './bisiesto';

describe('bisiesto', () => {
  it('deberia devolver "Es bisiesto" si el año es divisible por 400', () => {
    expect(bisiesto(1600)).toEqual("Es bisiesto");
  });
});