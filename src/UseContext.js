import React from 'react'
import { createContext } from 'react';
import Childone from './Childone';
import Childtwo from './Childtwo';

const  Mycontext=createContext();

const UseContext = () => {
    const myclass='6 am';
  const mycourse='React';

  const myobject={
    name:'Jeevan',
    address:'Dilsukhnagar'
  }

  return (
    <div>
        <Mycontext.Provider value={myobject}>
          <Childone />
          <Childtwo />
        </Mycontext.Provider>

        <Mycontext.Provider value={mycourse}>
          <Childtwo />
        </Mycontext.Provider>
    </div>
  )
}

export default UseContext;
export {Mycontext};
