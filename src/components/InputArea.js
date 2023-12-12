
const InputArea = ({handleInput, inputVal}) => {

  
  return (
    <textarea onChange={ handleInput } value={inputVal} className='large-area large-area--input' />
  )
}

export default InputArea