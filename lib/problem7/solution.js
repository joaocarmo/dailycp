#!/usr/bin/env node

const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

const mapping = new Map(alphabet.map((alpha, i) => [i + 1, alpha]))

const solution = () => null

if (require.main === module) {
  // Nothing
}

module.exports = solution
