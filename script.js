function converter() {
  var celsius_element = document.getElementById('converter-btn')
  var celsius = Number(celsius_element.value)

  var valorEmFahrenheit = (celsius * 9) / 5 + 32
  document.getElementById('fahrenheit').innerHTML = valorEmFahrenheit
}

var input = document.getElementById('converter-btn')
input.addEventListener('input', () => {
  converter()
})
