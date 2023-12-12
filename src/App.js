import { useState } from 'react';
import './App.css';


function App() {

  let [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handlerInput = (event) => {

    
    
    setInput(event.target.value)

    // setInput(event.target.value.replace(/<---BEGIN---[^]*?---BEGIN--->/g, ''));

    
  }

  const handlerFormat = () => {

    function extractJsonArray(inputCode) {
      const regex = /\[([\s\S]*?)\]/;
      const match = regex.exec(inputCode);
    
      if (match && match[1]) {
        return match[0]; // Entire matched array including brackets
        // Alternatively, return match[1]; // Only the content of the array without brackets
      }
    
      return null;
    }
    
   
    const inputCode = input;
    
    const extractedJsonArray = extractJsonArray(inputCode);
    
    if (extractedJsonArray !== null) {

      const finalOutput = JSON.stringify(JSON.parse(extractedJsonArray), null, 2);

      const index = JSON.parse(finalOutput).findIndex((el) => {
        return el["@type"] === "MedicalAudience";
      });

      

      setOutput(finalOutput);
      // setOutput(JSON.stringify(JSON.parse(extractedJsonArray), null, 2));
      // setOutput(JSON.parse(extractedJsonArray));
      // console.log(JSON.stringify(JSON.parse(extractedJsonArray), null, 2))

    } else {
      setOutput("No JSON array found in the code.");
    }
    
    
  }
  
  const handlerMinify = () => {
    try {
      
      const outPut = JSON.stringify(JSON.parse(input));
      setOutput(outPut);

    } catch (error) {
      setOutput("No JSON array found in the code.");
    }

  }
  
  
  


  return (
    <div className="conatiner">

      <textarea className='large-area large-area--input' value={input} onChange={handlerInput} placeholder='Input' />

      <div className="controls">
        <button onClick={handlerFormat} type='button' className='btn-format'> Format </button>
        <button onClick={handlerMinify} type='button' className='btn-minify'> Minify </button>
      </div>

      <textarea className='large-area large-area--output' readOnly value={output} placeholder='Output' />

    </div>
  );
}

export default App;
