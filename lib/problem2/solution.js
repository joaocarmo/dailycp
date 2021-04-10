#!/usr/bin/env node

const solution = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((val1, intIdx) =>
      arr.reduce((acc, val2, currentIdx) => {
        if (intIdx === currentIdx) {
          return acc
        }
        return acc * val2
      }, 1),
    )
  }
  return [0]
}

module.exports = solution
