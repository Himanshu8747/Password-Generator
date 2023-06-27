import { useState } from 'react'

const usePasswordGenerator = () => {
  const[password,setPassword] = useState("");
  const[errorMessage,setErrorMessage]=useState("");
  const generatePassword=(checkBoxData,length)=>{
    let charset="";
    let generatedPassword ="";

    // we will filter out the options which are selected from our checbox state array
    const selectedOption = checkBoxData.filter((checkbox)=>checkbox.state);
    if(selectedOption.length === 0){
        setErrorMessage("Select at least one option");
        setPassword("");
        return;
    }
    selectedOption.forEach(option => {
        switch(option.title){
            case "Include Uppercase Letters":
                charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
            case "Include Lowercase Letters":
                charset+="abcdefghijklmnopqrstuvwxyz";
                break;
            case "Include Numbers":
                charset+="1234567890";
                break;
            case "Include Symbols":
                charset+="!@#$%^&*()";
                break;  
            default:
                break;  
        }
    });
    for(let i=0;i<length;i++){
       const randomIndex= Math.floor(Math.random()*charset.length);
       generatedPassword += charset[randomIndex]; 
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  }
  return{password,errorMessage,generatePassword}
}

export default usePasswordGenerator