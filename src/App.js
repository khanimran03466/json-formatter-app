import { useState } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handlerInput = (event) => {
    setInput(event.target.value);
  }


  function extractJsonArray(inputCode) {
    const regex = /\[([\s\S]*?)\]/;
    const match = regex.exec(inputCode);
  
    if (match && match[1]) {
      return match[0]; // Entire matched array including brackets
      // Alternatively, return match[1]; // Only the content of the array without brackets
    }
  
    return null;
  }

  const handlerFormat = () => {
    
    const inputCode = input;
    const extractedJsonArray = extractJsonArray(inputCode);
    if (extractedJsonArray !== null) {
      
      const finalOutputWithoutScript = JSON.stringify(JSON.parse(extractedJsonArray), null, 2);
      const finalOutputWithScript = `<script type='application/ld+json'> ${finalOutputWithoutScript} </script>`

      // const index = JSON.parse(finalOutput).findIndex((el) => {
      //   return el["@type"] === "MedicalAudience";
      // });

      

      setOutput(finalOutputWithScript);
      // setOutput(finalOutput);
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


  const handlerCommentRemove = () => {
    const inputCode = input;
    const extractedJsonArray = extractJsonArray(inputCode);
    if (extractedJsonArray !== null) {
      
      const finalOutputWithoutScript = extractedJsonArray ;
      const finalOutputWithScript = `<script type='application/ld+json'> ${finalOutputWithoutScript} </script>`

      // const index = JSON.parse(finalOutput).findIndex((el) => {
      //   return el["@type"] === "MedicalAudience";
      // });

      

      setOutput(finalOutputWithScript);
      // setOutput(finalOutput);
      // setOutput(JSON.stringify(JSON.parse(extractedJsonArray), null, 2));
      // setOutput(JSON.parse(extractedJsonArray));
      // console.log(JSON.stringify(JSON.parse(extractedJsonArray), null, 2))

    } else {
      setOutput("No JSON array found in the code.");
    }
  }
  
  
  


  return (
    <div className="conatiner">

      <textarea className='large-area large-area--input' value={input} onChange={handlerInput} placeholder='Input' />

      <div className="controls">
        <button onClick={handlerCommentRemove} type='button' className='btn-comment-remove'> Remove Comment </button>
        <button onClick={handlerFormat} type='button' className='btn-format'> Format </button>
        <button onClick={handlerMinify} type='button' className='btn-minify'> Minify </button>
      </div>

      <textarea className='large-area large-area--output' value={output} placeholder='Output' readOnly />

    </div>
  );
}

export default App;
