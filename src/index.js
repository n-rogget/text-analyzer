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

})
const boton = document.getElementById ('reset-button')
const textarea = document.querySelector ('user-input')

function reiniciar() {
  textarea.value = "";  //me rechaza value
  document.querySelector("[data-testid='word-count']").textContent = "Palabras: 0"
  document.querySelector("[data-testid='character-count']").textContent = "Caracteres: 0"
  document.querySelector ("[data-testid='character-no-spaces-count']").textContent = "Caracteres sin espacios: 0"
  document.querySelector ("[data-testid='number-count']").textContent = "Números: 0"
  document.querySelector ("[data-testid = 'word-length-average']").textContent = "Promedio longitud de palabras: 0"
  document.querySelector ("[ data-testid= 'number-sum']").textContent = "Suma de numeros: 0"
}
boton.addEventListener('click', reiniciar)
