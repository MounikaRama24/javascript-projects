import React,{useState} from 'react'

export const App = () => {
  const [user,setUser]=useState("")
  const handler=e=>{
    setUser(e.target.value)
  }
  const styling={
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  color: 'RED',
  }

  return (
    <div>
      <center>
       <input type="text" placeholder='UserName' value={user}name="user" style ={styling} onChange={handler}></input>
       <br></br>
       {user} 
       


      </center>



    </div>
  )
}
export default App;