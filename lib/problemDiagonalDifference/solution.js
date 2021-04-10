#!/usr/bin/env node
/* eslint-disable no-param-reassign */

const solution = (input) => {
  const lines = input
    .split('\n')
    .map((l) => l.trim())
    .filter((v) => !!v)
  const [, ...rawMatrix] = lines
  const matrix = rawMatrix.map((row) =>
    row
      .split(' ')
      .filter((v) => !!v)
      .map((v) => parseInt(v, 10)),
  )
  const firstDiagonalSum = matrix.reduce((acc, row, rowNum) => {
    row.forEach((element, colNum) => {
      if (rowNum === colNum) {
        acc += element
      }
    })
    return acc
  }, 0)
  const secondDiagonalSum = matrix.reverse().reduce((acc, row, rowNum) => {
    row.forEach((element, colNum) => {
      if (rowNum === colNum) {
        acc += element
      }
    })
    return acc
  }, 0)
  return Math.abs(firstDiagonalSum - secondDiagonalSum)
}

if (require.main === module) {
  const input = `3
11   2   4
 4   5   6
10   8 -12`
  console.log(solution(input))
}

module.exports = solution
