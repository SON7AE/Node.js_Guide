// Promise

// 프로미스 : 내용이 실행은 되었지만, 결과를 아직 반환하지 않은 객체
// then 메서드를 붙이면 결과를 반환함
// 실행이 안료되지 않았으면 완료된 후에 then 내부 함수가 실행된다.
// Promise.all(배열) : 여러개의 프로미스를 동시에 실행
// - 하나라도 실패하면 catch로 감
// - allSettled 실패한것만 추려낼 수 있음

// Async && Await
// await을 사용할 땐, async가 필수이다.
// await이 then 역할을 한다고 생각하면 된다.
// async에서 return한 값들은 then()으로 받아야 한다.
// async 역시 promise이기 때문에 reject 거절시 에러를 찾을 수 없기 때문에 try ... catch 구문을 활용하여 catch에서 reject 에러를 감지한다.
