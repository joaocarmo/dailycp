#!/usr/bin/env node

// Or simply: const = (f) => (a, b) => f(a, b)
const cons = (a, b) => {
  const pair = (f) => f(a, b)

  return pair
}

const car = (pair) => pair((a) => a)

const cdr = (pair) => pair((a, b) => b)

const solution = (...args) => car(cons(...args))

if (require.main === module) {
  console.log(car(cons(3, 4)))
  console.log(cdr(cons(3, 4)))
}

module.exports = solution
