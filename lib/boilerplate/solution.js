#!/usr/bin/env node
const tests = require('./input.json')

const solution = () => null

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
