import React, { useContext } from 'react'
import { Mycontext } from './UseContext';

const Childtwo = () => {

    const ct=useContext(Mycontext);
  return (
    <div>
        <h1>{ct}</h1>
        <p>{ct.name} {ct.address}</p>
       
    </div>
  )
}

export default Childtwo