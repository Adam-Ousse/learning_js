The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. Here’s how JavaScript can be used to manipulate the DOM:

The `document` object is automatically created by the web browser when a web page is loaded. It is a part of the `window` object, which represents the browser window. The `document` object provides properties and methods to interact with the elements of the web page.

- **Automatic Creation:** You do not need to initialize the `document` object; it is created and available for use as soon as the HTML document is loaded.
- **Global Scope:** It is available globally, meaning you can access it directly from your JavaScript code without any special initialization.
You can access and modify the document propreties: 
```js
console.log(document.title); // Logs the current document title
document.title = "New Title"; // Sets a new title for the document
document.body.style.backgroundColor = "lightblue"; // Changes the background color of the body
console.log(document.head); // Logs the head element
console.log(document.URL); // Logs the current URL

```
## Selecting elements :
#### By Id :
```js
var element = document.getElementById('myId');
```
#### By Class name :
```js
var elements = document.getElementsByClassName('myClass');
```
#### By tag Name
```js
var elements = document.getElementsByTagName('div');
```
#### By Query selector : 
```js
var element = document.querySelector('.myClass'); // First element with class 'myClass'
var elements = document.querySelectorAll('.myClass'); // All elements with class 'myClass'
```

## Modifying elements 
### Changing Content : 
```js
var element = document.getElementById('myId');
element.innerHTML = 'New Content';
element.textContent = 'New Text Content';
element.innerText = "new text";
```
- `textContent` gets or sets the text content of all child elements, including hidden elements.
- It retrieves the text exactly as it appears in the HTML, without considering CSS styles.
On the other hand 
- `innerText` gets or sets the text content of visible elements, considering CSS styles like `display: none` and `visibility: hidden`.
- It retrieves the text as it appears to the user, including the effects of CSS styles.
### Changing styles : 
```js
var element = document.getElementById('myId');
element.style.color = 'red';
element.style.fontSize = '20px';
```
### Adding and removing classes : 
```js
var element = document.getElementById('myId');
element.classList.add('newClass');
element.classList.remove('oldClass');
```
### Creating and appending elements : 
```js
var newElement = document.createElement('div');
newElement.innerHTML = 'Hello World';
newElement.setAttribute('id', 'my-div');
newElement.setAttribute('class', 'container');
document.body.appendChild(newElement);
```
## Event handling : 
```js
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```
### 1. Click :
```js
//1. click - When an element is clicked 
document.getElementById('clickButton').addEventListener('click', function() { alert('Button clicked!'); });
```
or in html : 
```html

<button id="input-btn" onclick="nameOfFunction" placeholder="what's shown in the field by default">SAVE INPUT</button>
```
### 2. Double Click:
```js
// 2. dblclick - When an element is double-clicked 
document.getElementById('dblClickButton').addEventListener('dblclick', function() { alert('Button double-clicked!'); });
```
### 3. Mouse over element : 
```js
// 3. mouseover - When the mouse pointer is over an element 
document.getElementById('hoverElement').addEventListener('mouseover', function() { this.style.backgroundColor = 'yellow'; });
```
### 4. Mouse leaves an element : 
```js 
// 4. mouseout - When the mouse pointer leaves an element 
document.getElementById('hoverElement').addEventListener('mouseout', function() { this.style.backgroundColor = ''; });
```
### 5. Key pressed : 
```js
// 5. keydown - When a key is pressed down 
document.addEventListener('keydown', function(event) { console.log('Key pressed: ' + event.key); });
```

### 6. Key is released: 
```js
// 6. keyup - When a key is released 
document.addEventListener('keyup', function(event) { console.log('Key released: ' + event.key); });
```

### 7. Document or image loaded : 
```js
// 7. load - When the document or an image is fully loaded 
window.addEventListener('load', function() { console.log('Page is fully loaded'); });
```
### 8. Form submitted : 
```js
// 8. submit - When a form is submitted 
document.getElementById('myForm').addEventListener('submit', function(event) { event.preventDefault(); // Prevents the default form submission 
alert('Form submitted'); });
```

### 9. When the value of input,select or textarea changes : 
```js
// 9. change - When the value of an <input>, <select>, or <textarea> changes 
document.getElementById('myInput').addEventListener('change', function() { console.log('Input value changed to: ' + this.value); });
```
