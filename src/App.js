import { useState } from 'react';
import './App.css';
import ControlsBtn from './components/ControlsBtn';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';


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
      const finalOutputWithScript = `<script type='application/ld+json'> ${finalOutputWithoutScript} </script>`;    
      setOutput(finalOutputWithScript);

    } 
    else {
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
      const finalOutputWithScript = `<script type='application/ld+json'> ${finalOutputWithoutScript} </script>`;
      setOutput(finalOutputWithScript);

    } 
    
    else {
      setOutput("No JSON array found in the code.");
    }

  }
  
  
  


  return (
    <>
      <div className="conatiner">
        <div className="input_output_wrraper">
          <InputArea handlerInput={handlerInput} input={input} />
          <ControlsBtn CommentRemove={handlerCommentRemove}  handlerFormat={handlerFormat} handlerMinify={handlerMinify} />
          <OutputArea output={output} />
        </div>
      </div>
    </>
  );
}

export default App;
