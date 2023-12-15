import React from 'react'

const RemoveCommentBtn = ({CommentRemove}) => {
  return (
    <button onClick={CommentRemove} type='button' className='btn-comment-remove'> Remove Comment </button>
  )
}

export default RemoveCommentBtn