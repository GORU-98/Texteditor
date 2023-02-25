import React ,{useState}from 'react'

function Textarea(props) {
    const textChange = (e)=>{
        setText(e.target.value);

    }
    const upClick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const loClick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const removeExSpClick = ()=>{
        let newtext=text.split(/\s+/);
         setText(newtext.join(" "));
    }
    const copyClick = ()=>{
        navigator.clipboard.writeText(text);
        
    }
    const clearClick = ()=>{
        setText("");
    }
    const upAtFirstClick = ()=>{
        const lower= text.toLowerCase();
        setText(lower.charAt(0).toUpperCase() + lower.slice(1));

    }
    const [text,setText]=useState("");


    
     

  return (
    
     <>
<div className="container my-5 ">
    <h1>{props.title}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Enter the text...' value={text} onChange={textChange}
   style={props.mode==="light" ? {backgroundColor:"white"} : {backgroundColor:"#C9EEDC"}} ></textarea>
</div>
    <div className="container">
        <button type="button" className="btn btn-info mx-1"disabled={!text.length>0} onClick={upClick}>Uppercase</button>
        <button type="button" className="btn btn-info mx-1" disabled={!text.length>0} onClick={loClick}>Lowercase</button>
        <button type="button" className="btn btn-info mx-1" disabled={!text.length>0} onClick={removeExSpClick}>Remove Extra Space</button>
        <button type="button" className="btn btn-info mx-1" disabled={!text.length>0} onClick={copyClick}>Copy</button>
        <button type="button" className="btn btn-info mx-1" disabled={!text.length>0} onClick={clearClick}>Clear</button>
        <button type="button" className="btn btn-info mx-1" disabled={!text.length>0} onClick={upAtFirstClick}>Capital first letter</button>

    </div>
     </>
  )
}

export default Textarea
