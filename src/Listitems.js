import React from 'react'

const Listitems = (props) => {
  return (
    <div>
        <li key={props.myindex}>{props.menu}</li>
    </div>
  )
}

export default Listitems