// 호출 스택

function first() {
    second();
    console.log('첫 번째');
}
function second() {
    third();
    console.log('두 번째');
}
function third() {
    console.log('세 번째');
}
first();

// 위 코드의 순서 예측해보기
// 세 번째 => 두 번째 => 첫 번째

// 쉽게 파악하는 방법 : 호출 스택 그리기
// anonymous => first() => second() => third() 이 순서로 쌓이고
// third() => second() => first() => anonymous 이 순서로 실행된다.

// 호출 스택(함수의 호출, 자료구조의 스택)
// - anonymous은 가상의 전역 컨텍스트(항상 있다고 생각하는 게 좋음)
// - 함수 호출 순서대로 쌓이고, 역순으로 실행된다.
// - 함수 실행이 완료되면 스택에서 빠진다.
// - LIFO 구조라서 스택이라고 불린다.

function run() {
    console.log('3초 후 실행');
}
console.log('시작');

setTimeout(run, 3000);

console.log('끝');

// 이벤트 루프에 대해서 정확히 알고 가자!

function oneMore() {
    console.log('one More');
}
function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0);
    new Promise((resolve) => {
        resolve('hi');
    }).then(console.log);
    oneMore();
}

setTimeout(run, 5000);

// oneMore, run 함수를 선언한다.
// 호출 스택에 setTimeout(run, 5000) 실행 => 종료
// 백그라운드에 타이머(run, 5000)를 보내준다.
// 작성된 코드 종료 => anonymous 종료
// 그러나 여기서 프로그램 끝난 게 아니다.
// 백그라운드에 남은 타이머(run, 5000) 실행 => 5초 후에 run을 테스크 큐로 보낸다. => 이벤트 루프에 의해 run이 호출 스택으로 이동
// setTimeout(익명함수, 0) 실행 => 종료
// 백그라운드에 타이머(익명함수, 0)를 보내준다.
// Promise 실행 => Promise는 내부까진 동기 => resolve('hi')실행
// then을 만나는 순간 비동기로 변경 => 백그라운드에 then console.log ('hi')
// 호출 스택에 oneMore 실행 => console.log('run run') 실행 => 종료
// 호출 스택에서 oneMore 나가고, => run도 나간다.
// 백그라운드에 남아있는 타이머(익명함수, 0) 테스크 큐로 이동
// console.log('hi') 테스크 큐로 이동

// 그러나 Promise가 먼저 새치기! =>  Promise가 우선순위이므로 console.log('hi') 호출 스택으로 이동 => 익명함수 호출 스택 이동
