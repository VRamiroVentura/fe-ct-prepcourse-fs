function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter(function(num) {
    return num > 10;
  }).length;
}


module.exports = contarElementosMayoresA10;
