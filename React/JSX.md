JavascriptXML
It's similair to Js but allows us to in a declartive way , add and remove elements.
```jsx
ReactDOM.render(<h1>This is JSX</h1>, document.getElementById("root"))
```
small differences :
instead of class we use className : 
```jsx
ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))
```
ReactDOM.render() renders only one element with it's children, so it cant render siblings say 
```jsx
ReactDOM.render(
    <h1 className="header">This is JSX</h1><p>This is a paragraph</p>,
    document.getElementById("root")
)
```

```jsx
const element = <h1 className="header">This is JSX</h1>
/*

{
    type: "h1",
    key: null,
    ref: null,
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
*/
```
















