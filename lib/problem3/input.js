const Node = require('./node.class.js')

/*
          root
           /\
          /  \
        left right
       /
      /
    left
*/
const tree = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right'),
)

const input = [
  {
    args: [tree],
    expected: tree,
  },
]

module.exports = input
