#!/usr/bin/env node
const Node = require('./node.class.js')

// Simply returning JSON.strigify(tree) would work,
// but that's a JavaScript quirk
const serialize = (tree) => {
  const convertToObject = (node) => {
    if (!node) {
      return null
    }
    return {
      val: node.val,
      left: convertToObject(node.left),
      right: convertToObject(node.right),
    }
  }

  return JSON.stringify(convertToObject(tree))
}

const deserialize = (string) => {
  const convertToTree = (object) => {
    if (!object) {
      return null
    }
    return new Node(
      object.val,
      convertToTree(object.left),
      convertToTree(object.right),
    )
  }

  return convertToTree(JSON.parse(string))
}

const solution = (node) => deserialize(serialize(node))

if (require.main === module) {
  const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))
  console.log("deserialize(serialize(node)).left.left.val === 'left.left'")
  console.log(deserialize(serialize(node)).left.left.val === 'left.left')
}

module.exports = solution
