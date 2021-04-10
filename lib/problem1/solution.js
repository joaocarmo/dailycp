#!/usr/bin/env node
const { sprintf } = require('sprintf-js')

const solution = (list = [], num = NaN) => {
  if (Array.isArray(list) && typeof num === 'number' && !Number.isNaN(num)) {
    const N = list.length
    const K = Math.floor(N / 2)
    for (let i = 0; i < K; i += 1) {
      for (let j = i + 1; j < N; j += 1) {
        const A = list[i]
        const B = list[j]
        if (typeof A === 'number' && typeof B === 'number') {
          const sum = A + B
          if (sum === num) {
            return true
          }
        }
      }
    }
  }
  return false
}

if (require.main === module) {
  const list = [10, 15, 3, 7]
  const k = 17
  const expected = true
  const result = solution(list, k)
  console.log(sprintf('%10s:  %-10s', 'Result', `${result}`))
  console.log(sprintf('%10s:  %-10s', 'Expected', `${expected}`))
}

module.exports = solution
