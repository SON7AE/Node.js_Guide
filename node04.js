// 구조 분해 할당

// 구조 분해 할당을 사용하면 객체와 배열로부터 속성이나 요소로를 쉽게 꺼낼 수 있다.
const example = { a: 123, b: { c: 135, d: 146 } }
const a = example.a
const d = example.b.d

const {
    a,
    b: { d },
} = example

console.log(a) // 123

arr = [1, 2, 3, 4, 5]
const x = arr[0]
const y = arr[1]
const z = arr[4]

const [x, y, , , z] = arr

// 다음은 객체의 속성을 같은 이름의 변수에 대입하는 코드이다.
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        // this는 함수를 호출할 때 어떻게 호출되었냐에 따라 결정되기 때문에
        // this가 있는 경우엔 구조분해할당을 하기 어렵다.
        this.state.count--
        return this.status.count
    },
}
var getCandy = candyMachine.getCandy
var count = candyMachine.status.count

// 위 코드를 아래처럼 변경
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.state.count--
        return this.status.count
    },
}

const {
    getCandy,
    status: { count },
} = candyMachine
