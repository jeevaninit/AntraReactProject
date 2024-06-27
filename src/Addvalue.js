import React, { useMemo, useState } from 'react'

const Addvalue = () => {
    const [count,setCount]=useState(1);
    let num1=20;
    let num2=30;
    const sum=useMemo(
        ()=>{
            return num1+num2
        },[num1,num2]
    )
  return (
    <div>
        <h2>{sum}</h2>
        <h2>{count}</h2>
        <button onClick={
            ()=>{
                setCount(count+1)
            }
        } className="btn btn-info">Update Value</button>
    </div>
  )
}

export default Addvalue