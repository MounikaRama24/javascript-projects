import React, { useState,useEffect } from 'react';
function App(){
  const [count,setcount]=useState(0)
  useEffect(()=> console.log("Clicked"),[count])
    return (
      <div>
        <p>You Clicked {count }number of times</p>
        <button onClick={()=>setcount(count+1)}>Click Me</button>
      </div>
    );
  }


export default App;