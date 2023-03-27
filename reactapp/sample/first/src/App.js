import React from 'react'

export const App = () => {
  const [data,setData]=useState({sno:'',Todo:''})
  const [input, setInput] = useState('');
  const {sno,Todo}=data;
  const [result, setResult] = useState(0);
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleAdd = () => {
    setResult(result + parseInt(input));
    setInput('');
  };

  const handleSubtract = () => {
    setResult(result - parseInt(input));
    setInput('');
  };
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data)
  }
  return (
    <div>
      <center>

      
       <input type="text" value={input} onChange={handleInput} />
      <br />
      <input type="number" name='sno' placeholder='Sno:' value={sno} onChange={changeHandler}></input>
      <input type="text" name='Todo' placeholder='Enter the List:' value={Todo} onChange={changeHandler}></input>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>

    </center>
    </div>
  )
}
export default App;
