The **`localStorage`** read-only property of the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface allows you to access a [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage) object for the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)'s [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin); the stored data is saved across browser sessions.

```js
//it's a global scope variable 
localStorage.setItem("log","Adam was here");
console.log(localStorage.getItem("log"));
localStorage.clear();//clears it
```
