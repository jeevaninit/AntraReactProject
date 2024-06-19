import React from 'react'
import Listitems from './Listitems'

const Menunavbar = () => {


    const menulist=[
        'HOME',
        'ABOUT',
        'SERVICE',
        'CAREER',
        'GALLERY',
        'CONTACT'
    ]

  return (
    <div>
        <div className='menubar'>
        {menulist.map((item,index)=>
       /*  <li key={index}>{item}</li> */
        <Listitems 
        myindex={index}
        menu={item}
        />
        )}
        </div>
    </div>
  )
}

export default Menunavbar