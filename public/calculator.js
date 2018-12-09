let currentDisplay = 'sum-a'

const sumA = document.querySelector('#sum-a')
const sumB = document.querySelector('#sum-b')
const result = document.querySelector('#result')

function clearDisplay () {
  document.querySelectorAll('.display').forEach((elem) => elem.value = '')
  resetDisplaySelection()
}

function changeDisplay () {
  currentDisplay = currentDisplay === 'sum-a' ? 'sum-b' : 'sum-a'

}

function writeValue (value) {
  const currentDisplayElement = document.querySelector(`#${currentDisplay}`)
  let currentDisplayValue = currentDisplayElement.value
  if (value === '.') {
    currentDisplayValue = currentDisplayValue.replace('.', '')
  }
  if (value === '-') {
    currentDisplayValue = currentDisplayValue.replace('-', '')
    currentDisplayElement.value = value + currentDisplayValue
    return
  }
  currentDisplayElement.value = currentDisplayValue + value
}

function resetDisplaySelection () {
  currentDisplay = 'sum-a'
}

async function doTheMath () {
  let params = {
    sumA: sumA.value,
    sumB: sumB.value
  }
  const response = await axios.get('/sum', { params })
  result.value = response.data.result
  resetDisplaySelection()
}