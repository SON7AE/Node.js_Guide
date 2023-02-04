import { odd, even } from './var.mjs'

function checkOddOrEven(num) {
    if (num % 2) {
        // 홀수이면
        return odd
    }
    return even
}

// module.exports = export default
export default checkOddOrEven
