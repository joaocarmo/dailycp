# dailycp

Daily Coding Problem

## How to use

1. Add a new directory inside the `lib` directory and name it `problemX`.

2. Create two files: `input.json` and `solution.js`. The first should be an
array of objects to test against the solution and the second should export the
solution as a function.

3. Test the problem by calling the inspector and passing the problem number `X`

### Example

**Problem:**

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
./lib/inspect -p X
```

## Solved Problems

* [Problem #1][1]
* [Problem #2][2]

<!-- References -->
[1]: ./lib/problem1/README.md
[2]: ./lib/problem2/README.md
