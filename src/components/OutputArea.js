
const OutputArea = ({output}) => {
  return (
    <textarea className='large-area large-area--output' value={output} placeholder='Output' readOnly />
  )
}

export default OutputArea;