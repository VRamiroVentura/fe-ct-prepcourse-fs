function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const vistos = new Set();

  for (let i = 0; i < numeros.length; i++) {
    if (vistos.has(numeros[i])) {
      return numeros[i]; 
    }
    vistos.add(numeros[i]);
  }

  return null;
}

module.exports = encontrarElementoRepetido;