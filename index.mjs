import cp from 'child_process'
import * as engine from './engine.mjs'
const rounds = 100000000
const bunv =    cp.execSync('bun -v').toString('utf-8').replace('\n','')
const nodev =   cp.execSync('node -v').toString('utf-8').replace('\n','')
console.log('using node.js ' + nodev)
console.log('using bun.js ' + bunv)
console.log(`running ${rounds} test rounds\n`)

const tests = [
    "sigmoid",
    // "pow",
    // "bigpow",
    // "ifs",
    "random",
    "switchcase",
    "io",
    "bigint",
    "strconc",
    "templiterals"
]

const nodeResults = engine.run("node",...tests)
const bunResults = engine.run("bun",...tests)


process.stdout.clearLine()
process.stdout.write('\r')

let table = ''
const writeLine = (...x)=>{
    table +="|"
    x.forEach(each=>{
        table += (each+'').padEnd(18,' ') +'|'
    })
    table += '\n'
}
writeLine("RUNTIME",...tests.map(each=>`${each.toUpperCase()} (ms)`))
writeLine('-',...nodeResults.map(each=>"-"))
writeLine('node.js',...nodeResults)
writeLine('bun.js',...bunResults)
console.log(table)