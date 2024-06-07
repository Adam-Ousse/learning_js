### If else
Useful if the if statement are outside the elements
```jsx
function Conditional({ count }) {

  if (count > 5) {
    return <h1>Count is greater than 5</h1>;
  } else {
    return <h1>Count is less than 5</h1>;
  }
}
```
### Ternary :
When the conditionals are inside the elements 
```jsx
function Conditional({count}){
	return (
		<div>
		<p>lol</p>
		{count % 2 === 0 ? <h1>Count is even</h1> : <h1>Count is odd</h1> }
		</div>
	)
}

```