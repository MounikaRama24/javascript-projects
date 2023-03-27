import React,{useState} from 'react'

export const App = () => {
  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  //object destructring
  const{username,email,password,confirmPassword}=data;
  //Handlers...
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
    
  }
  const submitHandler=e=>{
    e.preventDefault();

    if(password===confirmPassword) {

     console.log(data,"signup sucessful")}
     else{
     console.log("Password is not Matching")}
    
  }


  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        
          <input type="text" name='username'  placeholder='enter username'value={username} onChange={changeHandler}/><br></br>
        
          <input type="email" name='email' placeholder='enter Email Address' value={email}onChange={changeHandler}/><br></br>

          
          <input type="password" name='password'  placeholder='enter Password'value={password}onChange={changeHandler}/><br></br>
         
          <input type="password" name='confirmPassword' placeholder='Confirm Password'value={confirmPassword}onChange={changeHandler}/><br></br>
          <button type='submit'>Submit</button>
        </form>
      </center>
      </div>
  )
}
export default signup;
