# Problem # Recursive Digit Sum

###### [Easy]

We define super digit of an integer `x` using the following rules:

Given an integer, we need to find the super digit of the integer.

- If `x` has only `1` digit, then its super digit is `x`.
- Otherwise, the super digit of `x` is equal to the super digit of the sum of the
  digits of `x`.

For example, the super digit of `9875` will be calculated as:

```
9 + 8 + 7 + 5 = 29
        2 + 9 = 11
        1 + 1 =  2
            2 =  2
```

You are given two numbers `n` and `k`. The number `p` is created by
concatenating the `n` string `k` times. Continuing the above example where
`n = 9875`, assume your value `k = 4`. Your initial `p = 9875 9875 9875 9875`
(spaces added for clarity).

All of the digits of `p` sum to `116`. The digits of `116` sum to `8`. `8` is
only one digit, so it's the super digit.

Sample Input

```
148 3
```

Sample Output

```
3
```
