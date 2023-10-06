const sigmoid = (x) => 1 / (1 + Math.pow(2.71828, -x))

const gradient = (x) => {
    const h = 1e-5;
    const derivative = (Math.pow(x + h, 2) - Math.pow(x, 2)) / h;
    return derivative;
}

const bi = (x) => {
    const b1 = 1234567890123456789012345678901234567890n
    const b2 = 3423424242432423424126345678901234567890n
    return BigInt(x) * b1 - b2
}
const random = ()=>{
    return Math.random()
}
export {bi,gradient,sigmoid,random}