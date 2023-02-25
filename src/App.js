import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import React ,{useState}from 'react'

function App() {
  const modeHandler = ()=>{
    if(mode==="light"){
        setMode("grey");
        document.body.style.backgroundColor="grey";
        document.body.style.color="white";
        setmodeText("Enable light Mode");

    }else{
        setMode("light");
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        setmodeText("Enable Blue Mode")
        
    }
}
const [mode,setMode]=useState("light");
const [modeText,setmodeText]=useState("Enable Dark Mode");


  return (
    <>
   <Navbar mode={mode} modeHandler={modeHandler} modeText={modeText}/>
   <Textarea title="Enter your text here..."  mode={mode}/>
    </>
  );
}

export default App;
