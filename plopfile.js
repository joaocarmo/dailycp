const path = require('path')

const rootPath = '.'
const srcPath = 'lib'
const templatesDir = 'boilerplate'
const problemPrefix = 'problem'

const templatesPath = path.join(rootPath, srcPath, templatesDir)
const problemsPath = srcPath

module.exports = (plop) => {
  plop.setGenerator('problem', {
    description: 'Create a boilerplate problem',
    prompts: [
      {
        type: 'input',
        name: 'problemNumOrName',
        message: 'Problem number or name in CamelCase, e.g. MakingAnagrams:\n',
      },
      {
        type: 'list',
        name: 'problemDifficulty',
        message: 'Problem difficulty (Easy, Medium, or Hard):\n',
        choices: ['Easy', 'Medium', 'Hard'],
        default: 1,
      },
      {
        type: 'input',
        name: 'problemDescription',
        message: 'Problem description:\n',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${problemsPath}/${problemPrefix}{{problemNumOrName}}/input.json`,
        templateFile: `${templatesPath}/input.json`,
      },
      {
        type: 'add',
        path: `${problemsPath}/${problemPrefix}{{problemNumOrName}}/README.md`,
        templateFile: `${templatesPath}/README.md.hbs`,
      },
      {
        type: 'add',
        path: `${problemsPath}/${problemPrefix}{{problemNumOrName}}/solution.js`,
        templateFile: `${templatesPath}/solution.js`,
      },
    ],
  })
}
