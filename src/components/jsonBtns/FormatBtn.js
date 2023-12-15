import React from 'react'

const FormatBtn = ({handlerFormat}) => {
  
  return (
    <button onClick={handlerFormat} type='button' className='btn-format'> Format </button>
  )
}

export default FormatBtn