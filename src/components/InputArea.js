
const InputArea = ({handlerInput, input}) => {

  
  return (
    <textarea className='large-area large-area--input' value={input} onChange={handlerInput} placeholder='Input' />
  )
}

export default InputArea