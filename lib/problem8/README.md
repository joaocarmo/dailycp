# Problem # 8

###### [Easy]

We call an array _bi-valued_ if it contains at most two different numbers.

For example, `[4, 5, 5, 4, 5]` is bi-valued (it contains two different numbers:
`4` and `5`), but `[1, 5, 4, 5]` is not bi-valued (it contains three different
numbers: `1`, `4` and `5`).

**What is the length of the longest bi-valued slice (continuous fragment) in a
given array `A`?**

Write a function that, given an array `A` consisting of `N` integers, returns
the length of the longest bi-valued slice in `A`.

```ts
function solution(A: number[]): number {}
```

**Examples:**

Given `A = [4, 2, 2, 4, 2]`, the function should return `5`, because the whole
array is bi-valued.

Given `A = [1, 2, 3, 2]`, the function should return `3`. The longest bi-valued
slice is `[2, 3, 2]`.

Given `A = [0, 5, 4, 4, 5, 12]`, the function should return `4`. The longest
bi-valued slice is `[5, 4, 4, 5]`.

Given `A = [4, 4]`, the function should return `2`.

**Assume that:**

1. `N` is an integer within the range `[1, 100]`
1. Each element of array `A` is an integer within the range
   `[-1 000 000 000, 1 000 000 000]`.
