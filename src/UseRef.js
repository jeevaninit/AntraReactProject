import React, { useRef } from 'react'

const UseRef = () => {

    const myRefid=useRef(null);

    const myfun=()=>{
        myRefid.current.innerHTML='Hello add variable';
        myRefid.current.classList.toggle('textcolor');
    }

  return (
    <div>
        <h1 ref={myRefid}>Working with useReference Hook</h1>

        <button className='btn btn-info'onClick={myfun}>Click Here</button>
    </div>
  )
}

export default UseRef