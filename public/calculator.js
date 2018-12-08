let currentDisplay = 'suma'

function clearDisplay () {
  document.querySelectorAll('.display').forEach((elem) => elem.value = '')

}
function changeDisplay () {
  currentDisplay = currentDisplay === 'suma' ? 'sumb' : 'suma'

}
function writeValue (value) {
  const currentDisplayElement = document.querySelector(`#${currentDisplay}`)
  currentDisplayElement.value = currentDisplayElement.value + value
}

function doTheMath () {

}