#!/usr/bin/env node

const solution = (A) => {
  // Define some helper functions
  const byUnique = (value, index, arr) => arr.indexOf(value) === index
  const findMax = (a, b) => Math.max(a, b)

  // Count the number of unique values within the given array
  const uniqueValues = A.filter(byUnique)

  // We can save some time by skipping the obvious cases
  if (uniqueValues.length > 2) {
    const numOfUniques = []

    for (let i = 0; i < A.length; i++) {
      for (let j = 1; j <= A.length; j++) {
        const subSlice = A.slice(i, j)

        const numOfUnique = subSlice.filter(byUnique).length

        /*
          We're only interested in a given sub-slice if it has, at most,
          2 unique values
        */
        if (numOfUnique <= 2) {
          numOfUniques.push(subSlice.length)
        }
      }
    }

    return numOfUniques.reduce(findMax)
  }

  return A.length
}

if (require.main === module) {
  // Code to be executed when invoking this file directly
  console.log(solution([1,2,2,1,5]))
}

module.exports = solution
