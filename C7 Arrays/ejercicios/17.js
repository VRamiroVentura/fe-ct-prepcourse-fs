function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
}

module.exports = agregarNumeros;
