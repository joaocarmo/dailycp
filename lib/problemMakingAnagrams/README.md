# Problem # Making Anagrams

###### [Easy]

We consider two strings to be anagrams of each other if the first string's
letters can be rearranged to form the second string. In other words, both
strings must contain the same exact letters in the same exact frequency. For
example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She
decides on an encryption scheme involving two large strings where encryption is
dependent on the minimum number of character deletions required to make the two
strings anagrams. Can you help her find this number?

Given two strings, `s1` and `s2`, that may not be of the same length, determine
the minimum number of character deletions required to make `s1` and `s2`
anagrams. Any characters can be deleted from either of the strings.

For example, `s1 = abc` and `s2 = amnop`. The only characters that match are the
**a**'s so we have to remove **bc** from `s1` and **mnop** from `s2` for a total
of **6** deletions.
