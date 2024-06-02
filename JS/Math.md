The **`Math`** namespace object contains static properties and methods for mathematical constants and functions.

### Math.random()
A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
```js
console.log(Math.random());
```
### Math.ceil()
The smallest integer greater than or equal to `x`
`Math.ceil()`
### Math.floor()
The largest integer smaller than or equal to `x`
`Math.floor()`

=> Generating random integers in \[a,b] :
```js
Math.floor(Math.random()*(b-a+1))+a;
```
=> Generating random integers in \[a,b[] :
```js
Math.floor(Math.random()*(b-a))+a;
```

### Math.pow(a,b)
Calculates $a^b$
