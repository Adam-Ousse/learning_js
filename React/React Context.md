making data available to children elements using 
```jsx
import React, { useContext, createContext, useState } from 'react';
const CountContext = createContext();
function PropDrilling() {

  const [count] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Child />
    </CountContext.Provider>
  )
}

function Child() {
  return <GrandChild />
}

function GrandChild() {

  const count = useContext(CountContext);

  return <div>{count}</div>
}
```