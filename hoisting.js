// 함수 먼저
function hello1() {
    console.log('Hello 1');
}

hello1();

// 함수의 호출을 먼저
hello2();

function hello2() {
    console.log('Hello 2');
}

// var 에서도 가능
age = 6;
age++;
console.log(age);

var age;

// example++
console.log(name);
name = 'Mark';
console.log(name);
var name = "Zico"; // == var name;

//즉, 선언문만 맨위로 호이스팅된다!!

//let을 사용!!
console.log(name);
name = 'Mark';
console.log(name);
let name;