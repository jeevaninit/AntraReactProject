import React, { useState } from 'react'
import Child_01 from './Child_01';
import Child_02 from './Child_02';

const Parent = () => {

    const [data,setData]=useState({
        name:'Jeevan Konduru',
        place:'Hyderabad-Dilsukhnagar',
        contact:'98348943894'
    })

    const {name,place,contact}=data;

    const condition=true;

  return (
    <div>

{condition?<Child_01 myname={name} myplace={place}/>:<Child_02 mycontact={contact}/>} 
    </div>
  )
}


export default Parent