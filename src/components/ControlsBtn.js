import RemoveCommentBtn from "./jsonBtns/RemoveCommentBtn"
import FormatBtn from "./jsonBtns/FormatBtn"
import Minify from "./jsonBtns/Minify"

const ControlsBtn = ({CommentRemove, handlerFormat, handlerMinify }) => {
  
  return (
    <div className="controls">
        
        <RemoveCommentBtn CommentRemove={CommentRemove}   />
        <FormatBtn handlerFormat={handlerFormat} />
        <Minify  handlerMinify={handlerMinify} />
        
    </div>
  )
}

export default ControlsBtn