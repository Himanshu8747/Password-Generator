import { useState } from 'react';
import './App.css';
import usePasswordGenerator from './hooks/use-password-generator';
import StrengthChecker from './components/StrengthChecker';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

function App() {
  const[length,setLength] =useState(4);
  const[copied,setCopied]=useState(false);
  const[checkBoxData,setCheckBoxData]=useState([
    {title:"Include Uppercase Letters",state:false},
    {title:"Include Lowercase Letters",state:false},
    {title:"Include Numbers",state:false},
    {title:"Include Symbols",state:false},
  ])
  const handleCheckboxChange=(i)=>{
    const updatedCheckboxData = [...checkBoxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckBoxData(updatedCheckboxData);
  }
  const handleCopyText=()=>{
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false)
    },1000);

  }
  const{password,errorMessage,generatePassword} = usePasswordGenerator();
  return (
    <div className="container">
      {/* Password Text and copy button */}
      {password && <div className='header'>
        <div className='title'>{password}</div>
        {/* <button className='copyBtn' onClick={handleCopyText}>{copied?"Copied":"Copy"}</button> */}
        <Button text={copied?"Copied":"Copy"} onclick={handleCopyText} customclass={'copyBtn'}/>
        </div>
      }
      {/* Character length */}
      <div className='characterLength'>
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input 
        type='range' 
        min="4"
        max="20"
        value={length}
        onChange={(e)=>setLength(e.target.value)}/>
      </div>
      {/* Checkboxes */}
      <div className='checkboxes'>
        {checkBoxData.map((checkbox,index)=>{
          return(
          <Checkbox key={index} title={checkbox.title} onchange={()=>handleCheckboxChange(index)} state={checkbox.state}/>
        )})}
      </div>
      {/* Strength */}
      <StrengthChecker password={password}/>
      {/* Error Handling */}
      {errorMessage && <div className='error'>{errorMessage}</div>}
      {/* Generate Button */}
      {/* <button className='generateBtn' onClick={()=>generatePassword(checkBoxData,length)}>Generate Password</button>
       */}
      <Button text={"Generate Password"} onclick={()=>generatePassword(checkBoxData,length)} customclass={'generateBtn'}/> 
    </div>
  );
}

export default App;
