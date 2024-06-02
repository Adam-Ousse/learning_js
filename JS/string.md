[Template string](Template%20string.md)
### Convert a string to a int 
```js
let b = parseInt("214112");//return NaN if the first non-whitespace character cannot be converted to a number
```
### Convert a string to a float :
```js
let a = parseFloat("1241.23131");//return NaN if the first non-whitespace character cannot be converted to a number
```
Or use for both : 
```js
let c = Number("13123.123123");//If the value can't be converted, it returns [`NaN`]
```
