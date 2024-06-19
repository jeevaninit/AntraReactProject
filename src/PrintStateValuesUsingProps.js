import React from 'react'

const PrintStateValuesUsingProps = (props) => {
  return (
    <div>
       <h3> PrintStateValuesUsingProps</h3>
        <p>{props.fn}</p>
        <p>{props.ln}</p>
        <p>{props.address}</p>
    </div>
  )
}

export default PrintStateValuesUsingProps