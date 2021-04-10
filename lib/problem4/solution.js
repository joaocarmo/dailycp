#!/usr/bin/env node

const solution = (arr) => {
  if (Array.isArray(arr)) {
    return arr
      .filter((val) => val > 0)
      .sort()
      .reduce((acc, val) => (acc < val ? acc : val + 1), 1)
  }
  return 1
}

module.exports = solution
