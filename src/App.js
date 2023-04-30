import React,{ useState } from 'react'
import axios from 'axios';
import Data from './data';
const Url='https://search-backend.onrender.com';
function App() {
  const [input,setInput]=useState("");
  const [ans,setAns]=useState("");
  
  const answer=async(e)=>{
    
    e.preventDefault();
    setAns("Please wait processing ...")
    await axios.post(`${Url}/ques`,{input}).then(({data})=>{
      setAns(data.output);
      console.log(data)
      setInput("");
         
    }).catch((err)=>{
        console.log(err);
    })   
}
  return (
    <div className="App">
      <div className="parent">
      <form>
        <div className="child1">
        
        <input className="query" type="text"  placeholder="Enter Query"  value={input} 
                onChange={(e)=>setInput(e.target.value)}
            />
              <button type='submit' onClick={answer} >Search</button>
        </div>
        </form>
        <div className="child2" >
        
       <Data ans={ans} />
        </div>
      </div>
    </div>
  );
}

export default App;
