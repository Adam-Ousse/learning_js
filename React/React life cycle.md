```jsx
function Lifecycle() {

  const [count] = useState(0);

  useEffect(() => {
    
    console.log('count updated!')

    return () => console.log('destroyed!')//run when component is destroyed

  }, [count]);//run whenever count is modified

}
```