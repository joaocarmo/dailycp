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
]

const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

const mapping = new Map(alphabet.map((alpha, i) => [i + 1, alpha]))

const solution = (code, sum = 0) => {
  // Make sure we're working with a string
  const codeStr = typeof code === 'string' ? code : (+code).toFixed()

  if (codeStr.length > 1) {
    let newSum = sum

    // We don't need this next line, but it helps to understand the logic
    // const first = codeStr.substring(0, 1)
    const restFirstStr = codeStr.substring(1, codeStr.length)

    newSum = solution(restFirstStr, newSum)

    const firstSecond = codeStr.substring(0, 2)

    if (mapping.get(+firstSecond)) {
      const restFirstSecondStr = codeStr.substring(2, codeStr.length)

      newSum += solution(restFirstSecondStr, newSum)
    }

    return newSum
  }

  if (mapping.get(+codeStr)) {
    return 1
  }

  return sum
}

if (require.main === module) {
  for (const { input, output } of tests) {
    const result = solution(input)

    const errorMessage = `Expected '${output}', but got '${result}'`

    console.assert(result === output, errorMessage)
  }
}

module.exports = solution
