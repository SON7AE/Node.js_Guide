// Map과 Set 객체

// Map은 객체와 유사하고
// Set은 배열과 유사하다고 생각하면 된다.

const m = new Map()
m.set('a', 'b') // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c') // 문자열이 아닌 값을 키로 사용 가능 => 본래 객체에서는 키의 타입이 심볼 or 스트링이다.

const d = {}
m.set(d, 'e') // 객체도 된다.

m.get(d) // get(키)로 속성값 조회
console.log(m.get(d)) // e

m.size // size로 속성 개수 조회
console.log(m.size)

for (const [key, value] of m) {
    // 반복문에 바로 넣어 사용 가능하다.
    console.log(key, value)
} // 속성 간의 순서도 보장된다.

m.delete(d) // delete(키)로 속성을 삭제한다.
m.clear() // clear()로 전제 제가한다.

// Map은 속성들 간의 순서를 보장하고 반복문을 사용할 수 있다.
// 속석명으로 문자열이 아닌 값도 사용할 수 있고 size 메서드를 통해 속성의 수를 쉽게 알 수 있다는 점에서 일반 객체와 다르다.

// Set은 중복을 허용하지 않는다는 것이 가장 큰 특징이다. 따라서 배열 자료구조를 사용하고 싶으나 중복은 허용하고 싶지 않을 때 Set을 대신 사용하면 된다.
// 또는 기존 배열에서 중복을 제거하고 싶을 때도 Set을 사용한다.
const arr = [1, 3, 2, 7, 2, 6, 3, 5]
const s = new Set(arr)
const result = Array.from(s)

console.log(result) // 1, 3, 2, 7, 6, 5

// new Set(배열)을 하는 순간 배열의 중복된 요소들이 제거된다.
// Set을 배열로 되돌리려면 Array.from(Set)을 사용하면 된다.
