const stringConcatenation = (x) => {
    let str = ""
    str += 'TeS-!@#$%TiNg ' + x + '\n123456789abcdefghijklmnopqrstuvwxyz'
    str += 'TeS-!@#$%TiNg ' + x + " " + x + '\n123456789abcdefghijklmnopqrstuvwxyz'
    str += 'TeS-!@#$%TiNg ' + x + " " + x + " " + x + '\n123456789abcdefghijklmnopqrstuvwxyz'
    return str
}

const templiterals = (x) => {
    let str = ""
    str += `TeS-!@#$%TiNg ${x} \n123456789abcdefghijklmnopqrstuvwxyz`
    str += `TeS-!@#$%TiNg ${x} ${x} \n123456789abcdefghijklmnopqrstuvwxyz`
    str += `TeS-!@#$%TiNg ${x} ${x} ${x}\n123456789abcdefghijklmnopqrstuvwxyz`
    return str
}

const centerString = (str,pad,infill)=>{
    let [l,t] = [str.length,str]
    let res = str.padStart(l + (pad-l)/2,infill)
    res = res.padEnd(pad,infill)
    return res
}

export {stringConcatenation,templiterals,centerString}