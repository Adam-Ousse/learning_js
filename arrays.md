Objects that enables [storing a collection of multiple items under a single variable name](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays), and has members for [performing common array operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples).
```js
let listOfNames = ["Adam","Idriss"];
listOfNames.length // Contains the length of the array : 2
```
Pushing : 
```js
listOfNames.push("Alfred","Jeanne");// push elements to the end of the array :
//["Adam","Idriss","Alfred","Jeanne"]
ListOfNames.length // 4

ListOfNames.unshift("A as first"); // adds elements to the begining of an array
listOfNames.length //5
```
Popping :
```js
let popedNameLast = listOfNames.pop(); // removes the last element of an array //returns undefined if the array is empty
let popedNameFirst = listOfNames.shift() // removes the first element of an array //returns undefined if the array is empty
```
