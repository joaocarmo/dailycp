#!/usr/bin/env node

const solution = (input = '') => {
  const lowerBound = 1
  const upperBound = 10 ** 4

  if (typeof input === 'string') {
    const [str1, str2] = input
      .toLowerCase()
      .split('\n')
      .map((line) => line.trim())
      .filter((v) => !!v)
    const K1 = str1.length
    const K2 = str2.length

    if (
      K1 >= lowerBound &&
      K1 <= upperBound &&
      K2 >= lowerBound &&
      K2 <= upperBound
    ) {
      const strArr1 = str1.split('')
      const strArr2 = str2.split('')
      const anagram1 = str1.split('').reduce((acc, val) => {
        if (!strArr2.includes(val)) {
          return acc + 1
        }
        return acc
      }, 0)
      const anagram2 = str2.split('').reduce((acc, val) => {
        if (!strArr1.includes(val)) {
          return acc + 1
        }
        return acc
      }, 0)
      return anagram1 + anagram2
    }
  }

  return 0
}

if (require.main === module) {
  const input = `abc
amnop`
  console.log(solution(input))
}

module.exports = solution
