#!/usr/bin/env node
const tests = require('./input.json')

const solution = (A) => {
  const counter = {}
  
  for (let i = 0; i < A.length; i += 1) {
    const currentElement = A[i]

    if (!counter[currentElement]) {
      counter[currentElement] = 0
    }

    counter[currentElement] += 1
  }

  return +Object.keys(counter).filter((key) => counter[key] === 1)[0]
}

if (require.main === module) {
  // Code to be executed when invoking this file directly
  for (const test of tests) {
    const result = solution(...test.args)
    const errorMessage =
      `ERROR: Expected '${test.expected}', but got '${result}'`
    console.assert(result === test.expected, errorMessage)
  }
}

module.exports = solution
