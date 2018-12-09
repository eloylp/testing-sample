const csvParser = require('csv-load-sync')
const testCases = csvParser('./test/calculator_sum_cases.csv')
const { sum } = require('./../src/calculator')

describe('Testing weird calculator.', () => {

  testCases.forEach(({ sumA, sumB, expectedResult }) => {
    it(`Must calculate that ${sumA} + ${sumB} must be ${expectedResult}`, () => {
      expect(sum(sumA, sumB)).toBe(parseFloat(expectedResult))
    })
  })

})