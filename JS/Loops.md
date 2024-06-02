## for loops :
```js
for(let i=0;i<3;i++){
	console.log(i);
}
Expected output:
/*
1
2
3
*/
```
with objects : 
```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```
with arrays : 
```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```