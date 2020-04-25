#!/usr/bin/env node
const yargs = require('yargs')
const path = require('path')
const fs = require('fs')

const divider = '-'.repeat(25)

const parser = yargs
  .scriptName('inspect')
  .usage('Usage: $0 [options]')
  .alias('v', 'version')
  .version()
  .alias('h', 'help')
  .help('h')
  .alias('p', 'problem')
  .demandOption('p')
  .nargs('p', 1)
  .describe('p', 'Load a problem')

const solutionPath = (p, prefix = 'problem', solutionFile = 'solution.js') => {
  if (p) {
    return path.resolve(path.join(__dirname, `${prefix}${p}`, solutionFile))
  }
  return ''
}

const inputPath = (p, prefix = 'problem', inputPath = 'input') => {
  if (p) {
    return path.resolve(path.join(__dirname, `${prefix}${p}`, inputPath))
  }
  return ''
}

const execFn = (fn, { args, expected }) => {
  const result = fn(...args)
  console.log('Result:')
  console.log(result)
  console.log('Expected:')
  console.log(expected)
  console.log('Pass:')
  console.log(JSON.stringify(result) === JSON.stringify(expected))
}

const executeSolution = (p, { solutionFile, inputFile }) => {
  const inputs = require(inputFile)
  const solution = require(solutionFile)
  if (typeof solution === 'function') {
    if (typeof Array.isArray(inputs)) {
      inputs.forEach((input, idx) => {
        console.log(divider)
        console.log(`Test #${idx + 1}`)
        console.log(divider)
        execFn(solution, input)
      })
    } else {
      console.error(`ERROR: make sure the problem ${p} test is an array`)
      process.exit(1)
    }
  } else {
    console.error(`ERROR: make sure the problem ${p} exports a function`)
    process.exit(1)
  }
}

const main = () => {
  const { problem } = parser.argv

  if (!Number.isNaN(parseInt(problem, 10))) {
    const solutionFile = solutionPath(problem)
    const inputFile = inputPath(problem)
    const inputFileJSON = `${inputFile}.json`
    const inputFileJS = `${inputFile}.js`
    if (fs.existsSync(solutionFile)) {
      if (fs.existsSync(inputFileJSON)) {
        executeSolution(problem, { solutionFile, inputFile: inputFileJSON })
      } else if (fs.existsSync(inputFileJS)) {
        executeSolution(problem, { solutionFile, inputFile: inputFileJS })
      } else {
        console.error(`ERROR: make sure the problem ${problem} has test inputs`)
        process.exit(1)
      }
    } else {
      console.error(`ERROR: make sure the problem ${problem} directory exists`)
      process.exit(1)
    }
  } else {
    console.error(`ERROR: make sure ${problem} is a valid problem number`)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}
