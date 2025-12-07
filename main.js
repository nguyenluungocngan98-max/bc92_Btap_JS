{/* In ra mot cau tu ra */ }
console.log("HELLO WORLD");
console.log("Day la mot cau lenh JS");

/**
 * Variables in JavaScript + Data types(kiểu dữ liệu) : biến -> chứa gía trị bên trong nó
 * Data types: 
 * String : chuỗi ký tự
 * Number: số
 * Boolean : true/false
 * Undefined : biến chưa được gán giá trị
 * Null : biến không có giá trị
 * Object : đối tượng
 * Symbol : ký hiệu
 * 
 * Cách khai báo biến trong
 * " = " : gán giá trị hoac luu trữ giá trị vào biến
 */

let bottleWater = "Aquafina"; // string
console.log(bottleWater);
let firstName = "Ngoc";
let lastName = "Ngan";
console.log(firstName + lastName);
let address = "123 ABC, Q1, HCM";
console.log(address);

let numberStudent = 50; // number
console.log(numberStudent);

let isMarried = false; // boolean
console.log(isMarried);

let numberOfChildren = null; // null
console.log(numberOfChildren);

let job;
console.log(job); // undefined
// Gan gia tri cho bien da khai bao
job = "Developer";

/**
 * Toan tu trong JS : + - * / %
 * 
 * 
 */

// Phep cong ( cong so va chuoi ky tu)
let a = 10;
let b = 5;
let sum = a + b;
console.log(sum);

// Phep tru
let sub = a - b;
console.log(sub);

// Phep nhan
let mul = a * b;
console.log(mul);

// Phep chia
let div = a / b;
console.log(div);

// Phep chia lay du
let c = 8;
let d = 3;
let mod = c % d;
console.log(mod);

// ++ : tang gia tri len 1 don vi
let e = 7;
e++;
console.log(e); // 8

// -- : giam gia tri xuong 1 don vi
let f = 4;
f--;
console.log(f); // 3

/**
 * Toan tu gan : =, +=, -=, *=, /=
 */

let g = 10;
g += 5; // g = g + 5
console.log(g); // 15

let h = 20;
h -= 10; // h = h - 10
console.log(h); // 10

let count = 0;
let newCount = ++count;
console.log(newCount);

// Khai bao bien : const (hang so)
const NUMBER = 20;
console.log(NUMBER);



