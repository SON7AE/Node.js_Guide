// require : Node에서 제공하는 함수
const { odd, even } = require('./var')

function checkOddOrEven(number) {
    if (number % 2) {
        return odd
    } else {
        return even
    }
}
checkOddOrEven(5)
