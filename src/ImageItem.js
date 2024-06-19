import React from 'react'

const ImageItem = (props) => {
  return (
    <div>
       <div key={props.myindex}>
        <img src={props.imgitem} alt={props.imgitem} />
       </div>
    </div>
  )
}

export default ImageItem