import './App.css';
import {useState} from 'react';


function App() {
  const date = new Date("june 21 2027")
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  date.setDate(date.getDate() + (count * step))

  return (
    <div className="App">
      <input type='range' min='0' max='10' onChange={(e) => setStep(e.target.value)} value={step}/> {step}<br></br>
      
      
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input type='text' onChange={(e) => setCount(e.target.value)} value={count}></input>
      <button onClick={() => setCount((c) => c + step)}>+</button><br></br>
      
      {count=== 0 ? 
        "Today is ": 
        count >=1 ? 
        `${count} day from today is `:
        `${count} days ago from today was `
        
      }    {date.toDateString()}<br></br>
      {(count !==0 || step!==1) ?
      <button onClick={() => {setCount(0); setStep(1)}}>Reset</button>:
      ""
      }
      
    </div>
  );
}


export default App;
