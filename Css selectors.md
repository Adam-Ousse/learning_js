1. **Universal Selector (`*`)**: Selects all elements on the page. 
	```css 
	*{ 
	margin: 0;
	padding: 0; 
	}```
2. **Type Selector**: Selects all elements of a given type.
```css
p {
color: blue;
}
```
3. **Class Selector (`.`)**: Selects all elements with a specific class.
```css
.myClass {
font-size: 20px;
}
```
4. **ID Selector (`#`)**: Selects a single element with a specific ID.
```css
#myId {
    background-color: yellow;
}
```
5. **Pseudo-class Selector**: Selects elements based on their state.
```css
a:hover {
    color: red;
}
```
6. **Child Selector (`>`)**: Selects direct child elements.
```css
.container > p {
    margin: 10px;
}
```
7. **Descendant Selector (space)**: Selects all elements that are descendants of a specified element.
```css
.container p {
    color: green;
}

```