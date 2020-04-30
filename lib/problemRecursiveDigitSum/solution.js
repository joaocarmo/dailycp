#!/usr/bin/env node

const superDigit = (p = '1') => {
  const digit = `${p}`
  if (digit.length === 1) {
    return +digit
  }
  const sumDigits = digit.split('').reduce((acc, v) => acc + +v, 0)
  return superDigit(sumDigits)
}

const solution = (n = '1', k = 1) => {
  const lowerBoundN = 1
  const upperBoundN = 10*100000
  const lowerBoundK = 1
  const upperBoundK = 10*5
  if (typeof n === 'string' && typeof k === 'number') {
    if ((+n >= lowerBoundN && +n <= upperBoundN)
    && (k >= lowerBoundK && k <= upperBoundK)) {
      const p = n.repeat(k)
      return superDigit(p)
    }
  }
  return 0
}

if (require.main === module) {
  const input = ['148', 3]
  console.log(solution(...input))
}

module.exports = solution
