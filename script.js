function converterCelsiusToFahrenheit() {
  let celsius_element = document.getElementById('celsius')
  let celsius = Number(celsius_element.value)

  let valorEmFahrenheit = (celsius * 9) / 5 + 32
  document.getElementById('temperature').value = valorEmFahrenheit
}

function converterFarenheitToCelsius() {
  let fahrenheit_element = document.getElementById('temperature')
  let fahrenheit = Number(fahrenheit_element.value)

  let valorEmCelsius = ((fahrenheit - 32) * 5) / 9
  document.getElementById('celsius').value = valorEmCelsius.toFixed(2)
}

function converterCelsiusToKelvin() {
  let celsius_element = document.getElementById('celsius')
  let celsius = Number(celsius_element.value)

  let valorEmKelvin = celsius + 273.15
  document.getElementById('temperature').value = valorEmKelvin.toFixed(2)
}

function converterKelvinToCelsius() {
  let kelvin_element = document.getElementById('temperature')
  let kelvin = Number(kelvin_element.value)

  let valorEmCelsius = kelvin - 273.15
  document.getElementById('celsius').value = valorEmCelsius.toFixed(2)
}

var btn_f = document.getElementById('btn-f')
var btn_k = document.getElementById('btn-k')
var to_F = true

btn_f.addEventListener('click', () => {
  btn_f.classList.add('active-btn')
  btn_k.classList.remove('active-btn')
  converterCelsiusToFahrenheit()
  to_F = true
})

btn_k.addEventListener('click', () => {
  btn_k.classList.add('active-btn')
  btn_f.classList.remove('active-btn')
  converterCelsiusToKelvin()
  to_F = false
})

var input_fahrenheit = document.getElementById('temperature')
input_fahrenheit.addEventListener('input', () => {
  if (to_F) converterFarenheitToCelsius()
  else if (!to_F) converterKelvinToCelsius()
})

var input_celsius = document.getElementById('celsius')
input_celsius.addEventListener('input', () => {
  if (to_F) converterCelsiusToFahrenheit()
  else if (!to_F) converterCelsiusToKelvin()
})
