function converter() {
  var celsius_element = document.getElementById('celsius')
  var celsius = Number(celsius_element.value)

  var valorEmFahrenheit = (celsius * 9) / 5 + 32
  document.getElementById('fahrenheit').value = valorEmFahrenheit
}

function converterFarenheit() {
  var fahrenheit_element = document.getElementById('fahrenheit')
  var fahrenheit = Number(fahrenheit_element.value)

  var valorEmCelsius = ((fahrenheit - 32) * 5) / 9
  document.getElementById('celsius').value = valorEmCelsius.toFixed(2)
}

var input = document.getElementById('celsius')
input.addEventListener('input', () => {
  converter()
})

var input_fahrenheit = document.getElementById('fahrenheit')
input_fahrenheit.addEventListener('input', () => {
  converterFarenheit()
})
