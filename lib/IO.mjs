import fs from 'fs'
const writeAndRead = (x)=>{
    let r = ''
    fs.writeFileSync('tmp.test.txt', "TESTTING123456789\nabcdefghijklmnopqrstuvwxyz123456789abcdefghijklmnopqrstuvwxyz\n123456789abcdefghijklmnopqrstuvwxyz")
    r = fs.readFileSync('tmp.test.txt', 'utf-8')
    fs.rmSync('tmp.test.txt')
    return r
}

export {writeAndRead}