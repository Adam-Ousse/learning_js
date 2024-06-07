Signal from the browser signaling some interaction from the user

The usual way was : 
```js
const button = document.querySelector("button")
button.addEventListener('click', (event) =>{
	console.log(event);
}))
```
in React it's the same but much more declarative

```jsx
function Events() {
  return <button onClick={(event => console.log(event))}>Click</button>
}
```
we usually wrap it in a function 
```jsx
function Events() {
	const clickHandler = (event)=>{
		console.log(event)
	}
  return <button onClick={clickHandler}>Click</button>
}
```
If the function requires more parameters : 
```jsx
function Events() {
	const clickHandler = (event,foo)=>{
		console.log(event)
	}
  return <button onClick={(e) =>clickHandler(e,23)}>Click</button>
}
```