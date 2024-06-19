import React, { useState } from 'react'
import Child_01 from './Child_01';
import Child_02 from './Child_02';

const StateManagement = () => {
    const comheading='Welcome to React State Management..';
    const course='React-6am';

    const products={
        pname:'Dell-1505',
        pprice:10000,
        pdiscount:1000
    }
    const [value,setValue]=useState('Jeevan Konduru');

    const styles={
        headingstyle:{
            color:'green',
            background:'yellow',
            height:'40px',
            width:'100%',
            fontSize:'30px'
        },
        parastyle:{
            color:'blue',
            background:'gray',
            fontSize:'12px',
            padding:'10px'
        }
    }

  return (
    <div>

        
        <h2 style={styles.headingstyle}>{value}</h2>

        <Child_01 
        ch={comheading}
        />

        <Child_02 
        cs={course}
        />

        <div style={styles.parastyle}>
        <p>{products.pname}</p>
        <p>{products.pprice}</p>
        <p>{products.pdiscount}</p>
        </div>
    </div>
  )
}

export default StateManagement