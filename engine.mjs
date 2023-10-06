import fs from 'fs'
import cp from 'child_process'

export function run(binary,...tests){
    var files = fs.readdirSync('benchs')
    var map = new Map()
    files.forEach(each=>map.set(each.replace(/.mjs$/,''),each))
    var results = []
    for (const test of tests) {
        const file = map.get(test)
        if(!file){results.push("not exist"); continue;}
        process.stdout.write(`\rrunning ${binary} - ${test}`.padEnd(30,' '))
        const time1 = (new Date()).getTime()
        cp.execSync(`${binary} benchs/${file}`)
        const time2 = (new Date()).getTime()
        var res = time2 - time1
        results.push(res)
    }
    return results
}
