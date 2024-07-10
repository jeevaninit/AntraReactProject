import React, { useCallback } from 'react'

const UseCallback = () => {

    const value=10;

    const myregularfun=()=>{
        return "Hello hi am from my regular function...";
      
      }

    const myusecalback=useCallback(

        ()=>{
            console.log('Hello am from use Callback Hook...')
            },[value]
)

const condition=false;

  return (
    <div>
{/*         <button onClick={myregularfun}>Regular Function</button>
        <button onClick={myusecalback}>UseCallback Hook</button>
        {myusecalback()}
      {/*   {myregularfun()} */} 

      {condition?"Hello":'hi..'}

    </div>
  )
}

export default UseCallback