import { odd, even } from './var.mjs'
import checkNumber from './func.mjs'

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        // 홀수이면
        return odd
    }
    return even
}

console.log(checkNumber(10)) // MJS 짝수입니다.
console.log(checkStringOddOrEven('hello')) //MJS 홀수입니다.
