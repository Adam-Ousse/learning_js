The **`JSON`** namespace object contains static methods for parsing values from and converting values to [JavaScript Object Notation](https://json.org/) ([JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)).
```js
//js to string 
let a = {x:5,y:6};
console.log(JSON.stringify(a)); //'{"x":5,"y":6}'

// string to js
let b = JSON.parse('{"x":5,"y":6}');
b.x//5
```