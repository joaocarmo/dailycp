# dailycp

Daily Coding Problem

## How to use (automatically)

Run the following command and answer the promps.

```sh
yarn problem
```

## How to use (manually)

1. Add a new directory inside the `lib` directory and name it `problemX`.

2. Create two files: `input.json` and `solution.js`. The first should be an
   array of objects to test against the solution and the second should export
   the solution as a function.

3. Test the problem by calling the inspector and passing the problem number `X`.

**Note:** Check the [boilerplate][boilerplate].

### Example

**Problem:** Return the sum of 2 integers.

`input.json`

```json
[
  {
    "args": [1, 1],
    "expected": 2
  }
]
```

`solution.js`

```js
module.exports = (numA, numB) => +numA + +numB
```

**Testing:**

```sh
yarn inspect -p X
```

## Solved Problems

### Main series

- [Problem #1][1]
- [Problem #2][2]
- [Problem #3][3]
- [Problem #4][4]
- [Problem #5][5]
- [Problem #6][6]
- [Problem #7][7]
- [Problem #8][8]
- [Problem #9][9]

### Extra credit

- [Diagonal Difference][diagonaldifference]
- [Making Anagrams][makinganagrams]
- [Recursive Digit Sum][recursivedigitsum]

<!-- References -->

[boilerplate]: ./lib/boilerplate
[1]: ./lib/problem1
[2]: ./lib/problem2
[3]: ./lib/problem3
[4]: ./lib/problem4
[5]: ./lib/problem5
[6]: ./lib/problem6
[7]: ./lib/problem7
[8]: ./lib/problem8
[9]: ./lib/problem9
[diagonaldifference]: ./lib/problemDiagonalDifference
[makinganagrams]: ./lib/problemMakingAnagrams
[recursivedigitsum]: ./lib/problemRecursiveDigitSum
