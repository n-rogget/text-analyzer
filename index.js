import analyzer from "./analyzer.js";

const cuadroTexto = document.querySelector("[name = 'user-input']");

cuadroTexto.addEventListener("keyup", () => {
  const texto = cuadroTexto.value;
  
  const palabras = document.querySelector("[data-testid='word-count']")
  const contadorPalabras = analyzer.getWordCount (texto);
  palabras.innerHTML = "Palabras: " + contadorPalabras

  const caracteres = document.querySelector("[data-testid='character-count']");
  const contadorCaracteres = analyzer.getCharacterCount(texto);
  caracteres.innerHTML = "Caracteres: " + contadorCaracteres
  
  const sinEspacio = document.querySelector ("[data-testid='character-no-spaces-count']")
  const contadorSinEspacio = analyzer.getCharacterCountExcludingSpaces (texto);
  sinEspacio.innerHTML = "Caracteres sin espacios: " + contadorSinEspacio
  
  const numero = document.querySelector ("[data-testid='number-count']")
  const contadorNumero = analyzer.getNumberCount (texto);
  numero.innerHTML = "Números: " + contadorNumero
  
  const promedio = document.querySelector ("[data-testid = 'word-length-average']")
  const contadorPromedio = analyzer.getAverageWordLength (texto);
  promedio.innerHTML = "Promedio longitud de palabras: " + contadorPromedio
  
  const suma = document.querySelector ("[ data-testid= 'number-sum']")
  const contadorSuma = analyzer.getNumberSum (texto);
  suma.innerHTML = "Suma de numeros: " + contadorSuma
  
  
  //document.getElementById("ide").innerHTML = "palabras: " + const;

  /*let reset = document.getElementById ("reset");
reset.addEventListener("click", _ => {
  location.reload();
})
*/

  //TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
});
