#!/usr/bin/env node

const tests = [
  {
    input: 0,
    output: 0,
  },
  {
    input: 1,
    output: 1,
  },
  {
    input: 11,
    output: 2,
  },
  {
    input: 111,
    output: 3,
  },
  {
    input: 1111,
    output: 5,
  },
  {
    input: 11111,
    output: 8,
  },
  {
    input: 111111,
    output: 13,
  },
  {
    input: 1111111,
    output: 21,
  },
  {
    input: 2,
    output: 1,
  },
  {
    input: 21,
    output: 2,
  },
  {
    input: 211,
    output: 3,
  },
  {
    input: 121,
    output: 3,
  },
  {
    input: 112,
    output: 3,
  },
  {
    input: 91215225251521,
    output: 120,
  },
  {
    input: '01',
    output: 1,
  },
  {
    input: 201,
    output: 2,
  },
  {
    input: '0201',
    output: 2,
  },
  {
    input: 10201,
    output: 4,
  },
  {
    input: 110201,
    output: 6,
  },
  {
    input: 1110201,
    output: 10,
  },
]

// We don't really need this, but it helps to structure the solution
const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

const mapping = new Map(alphabet.map((alpha, i) => [i + 1, alpha]))

const solution = (code, sum = 0) => {
  if (!code) {
    return sum
  }

  // Make sure we're working with a string
  const codeStr = (+code).toFixed()
  const size = codeStr.length

  if (size > 1) {
    // We don't need this next line, but it helps to understand the logic
    // const first = codeStr.substring(0, 1)
    const restFirstStr = codeStr.substring(1, size)

    let newSum = solution(restFirstStr)

    const firstTwo = codeStr.substring(0, 2)

    if (mapping.get(+firstTwo)) {
      const restFirstTwoStr = codeStr.substring(2, size)

      newSum += solution(restFirstTwoStr, newSum)
    }

    return newSum
  }

  return 1
}

if (require.main === module) {
  for (const { input, output } of tests) {
    const result = solution(input)

    const errorMessage = `Expected '${output}', but got '${result}'`

    console.assert(result === output, errorMessage)
  }
}

module.exports = solution
