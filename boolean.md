```js
const x = false;
if (x){
	// this code will not be exeture
}
```

Logical Operators:


- Less , greater than : `>, <`
- Strict equality : `===` (strict because it doesn't convert types of different parts)
- Strict inequality : `!==`
- Equality : `==`  ( it attempts to convert and compare operands that are of different types.)
- Inequality : `!=`
- And : `&&`
- Or : `||`

### falsy values : 
```js
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN
```

To check whether a variable is true or false :
```js
let booleanValue = Boolean(a);
```