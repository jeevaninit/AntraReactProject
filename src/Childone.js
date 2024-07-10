import React from 'react'
import { useContext } from 'react'
import { Mycontext } from './UseContext';


const Childone = () => {
    const value=useContext(Mycontext);
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default Childone