#!/usr/bin/env node

const solution = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((val, intIdx) => {
      return arr.reduce((acc, val, currentIdx) => {
        if (intIdx === currentIdx) {
          return acc
        }
        return acc * val
      }, 1)
    })
  }
  return [0]
}

module.exports = solution
