//alert("hi"); // 알람 출력

//console.log(); //화면출력

//console.log(); //print문

//console.log(); //괄호 안에서 +(덧셈), \*(곱셈), /(나눗셈)이 가능하다

//const a1 = 10; //변수 선언문 - 값 변형 불가
//let a2 = 20; //변수 선언문 - 값 변형가능
//var a3 = 30; //변수 선언문, - 변수를 보호해주지 못함

//a2 = 22; // 값바꾸기

//const a = [1, 2, 3, 4, "sads", 2]; // 리스트 선언 형식

//console.log(a[2]); // 리스트중 값 하나를 꺼내와서 출력

//a.push(21); // 리스트마지막에 값 추가

const playerName = "nico";
const playerPoint = 121212;
const playerHandsome = false;
const playerFat = "little bit";
const player22 = ["nico", 121212, false, "little bit"]; //선언문들

const player = {
  //object 만드는 형식
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player); //콘솔창에 띄우는 방법들
console.log(player.name);
console.log(player["name"]);

console.log(player);

player.fat = false;
console.log(player); //const에 업데이트 불가능하다는것을 확인

player.lastName = "potato"; // 추가하는 법
console.log(player); // 확인

player.points = player.points + 15; // player.points에 15를 더하기
console.log(player.points); //player.points 확인

function sayHello(nameOfPerson, age) {
  // function 선언문
  console.log("Hello my name is" + nameOfPerson + "and I" + age);
}

sayHello("nico", 10); //function 불러오기
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumP, secontNumP) {
  // 덧셈하는 function 만들기
  console.log(firstNumP + secontNumP);
}
function divide(firstNumD, secontNumD) {
  // 나눗셈하는 function 만들기
  console.log(firstNumD / secontNumD);
}

plus(8, 88); // plus function불러내기
divide(98, 20); // divide function 불러내기

const functionObject = {
  //object 생성
  name: "nico",
  sayHello: function (functionObjectName) {
    //object안에서 function 생성
    console.log("HI! " + functionObjectName);
  },
};

console.log(functionObject.name); //object 기본 방법
functionObject.sayHello("aa"); //object에서 function 불러오는 방법

const isNicoFat = true;
isNicoFat = flase; // 수정불가 let을 사용(var은 사용하지 말것)
const anull = null; //비어있음
const toBuy = ["potato", "piza", "tomato"]; //aray생성
console.log(toBuy[2]); //2번째 번지의 가뵤 보기
toBuy.push("apple"); //마지막에 값 추가하기

const recapPlayer = {
  //object 만들기
  name: "nico",
  age: 98,
};
console.log(recapPlayer.age); //object 불러내기
function recapPlus() {
  //function 만들기
  console.log(2 + 2);
}
recapPlus(); //function불러내기
const recapCalculator = {
  //object 안에서 function만들기
  add: function (cala, calb) {
    console.log(cala, calb);
  },
};
recapCalculator.add(5, 1); //object 안에있는 funtion 불러내기

const age = 96;

function calculateKrAge(ageOfForeigner) {
  //function만들기ㅣ
  return ageOfForeigner + 2; //값을 계산 한 뒤 돌려주기
}
const krAge = calculateKrAge(age); //funtion값을 krAge에 저장
console.log(krAge); //return받은 krAge 출력

const calculator = {
  //사칙연산하는 object생성
  plus: function (a, b) {
    return a + b; //덧셈값 반환
  },
  minus: function (a, b) {
    return a - b; //뺄셈값 반환
  },
  times: function (a, b) {
    return a * b; //곱셈값 반환
  },
  divide: function (a, b) {
    return a / b; //나눗셈값 반환
  },
  power: function (a, b) {
    return a ** b; //제곱값 반환
  },
};

const pulsResult = calculator.plus(2, 3); //덧셈 값 저장
const minusResult = calculator.plus(2, 3); //뺄셈 값 저장
const timesResult = calculator.plus(2, 3); //곱셈 값 저장
const divideResult = calculator.plus(2, 3); //나눗셈 값 저장
const powerResult = calculator.plus(2, 3); //제곱 값 저장
