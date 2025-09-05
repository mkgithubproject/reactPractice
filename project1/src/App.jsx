
import { useState } from 'react'
function App() {

  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = ()=>{
    if(count == 0){
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
    
    <h1>Counter component</h1>
    <div>Count: {count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}> Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    
    
    </>
  )
}

export default App
