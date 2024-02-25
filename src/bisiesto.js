function bisiesto(anio) {
  if (anio % 400 === 0) {
    return "Es bisiesto";
  }
  else if (anio % 100 === 0 && anio % 400 !== 0) {
    return "No es bisiesto";
  }
  else if (anio % 4 === 0 && anio % 100 !== 0) {
    return "Es bisiesto";
  }
  else {
    return "No es bisiesto";
  }
}

export default bisiesto;