/**
 * const letの変数宣言
 */

// var val1 = "var変数";

// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数は上書き可能";

// // console.log(val1);

// // //var変数は再宣言可能
// // var val1 = "var変数を再宣言";

// // console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //var変数は再宣言不可
// //var val2 = "var変数を再宣言";

// // const val3 = "const変数";
// // console.log(val3)

// // const val3 = "const変数を再宣言";

// const val4 = {
//   name: "テスト",
//   age: 28
// };

// //constはプロパティ

// val4.name = "jak";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5.push("monkey");
// console.log(val5);

// //const name = "じゃけえ";
// //const age = 28;
// //従来
// const mes1 = "私の名前は" + name + "です";
// //console.log(mes1);

// //テンプレート文字列
// const mes2 = `私の名前は${name}です`;
// console.log(mes2);

// //従来の関数
// function func1(str) {
//   return str;
// }
// const func2 = function (str) {
//   return str;
// };
// console.log(func1("aaa"));

// //アロー関数
// // const func3 = (str) => {
// //   return str;
// // };

// const func3 = (str) => str;

// console.log(func3("bbb"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

// // const myPrf = {
// //   name: "田中",
// //   age: 28
// // };

// //const mes3 = `名前は${myPrf.name}です。年齢は${myPrf.age}才です。`;
// //console.log(mes3);

// // const {name, age} = myPrf;
// // const mes4 =  `名前は${name}です。年齢は${age}才です。`;
// // console.log(mes4);

// const myPrf = ["じゃけえ", 28];

// const mes4 = `名前は${myPrf[0]}です。年齢は${myPrf[1]}才です。`;
// console.log(mes4);

// const [name, age] = myPrf;
// const mes5 = `名前は${name}です。年齢は${age}才です。`;
// console.log(mes5);

// //デフォルト
// const sayHello = (name = "名無し") => console.log(`こんちわ${name}さん`);
// sayHello("だれか");

//スプレッド構文...
//配列の展開;
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
//const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//const [...arr3] = arr2;
//console.log(arr3);

//配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

//deepcopy
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr6);
arr6[0] = 100;
console.log(arr4);

//map filter
const nameArr = ["田中", "山田", "上田"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;

// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumAry = numArr.filter((num) => {
// //   return num % 2 === 0;
// // });
// // console.log(newNumAry);

// const newNameArr = nameArr.map((name) => {
//   if (name === "上田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 > 0 ? 'trueです': 'falseです';
// console.log(val1);

// const num = "1300";
// //console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100越え" : "100未満";
};
console.log(checkSum);
