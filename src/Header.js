import React from 'react'

export const Headercontent=({props})=>{
  return(
    <>
    <div>
    <h3>ITproSkillSet</h3>
    <h1>Welcome to React Test Cases</h1>
    <p>Training and Development</p>
{/*     {props.nm} */}
    </div>
    </>
  )
}

export const Logindetails=()=>{
  return(
    <>
    <ul className='login'>
      <li>LogIn</li>
      <li>LogOut</li>
    </ul>
    </>
  )
}

export const Searchinput=()=>{
  return(
    <>
    <input type="search" size={40} />
    </>
  )
}


const Header = () => {
  return (
    <div>
      <header>
      <Headercontent />
      <Searchinput />
      <Logindetails />
      </header>
    </div>
  )
}

export default Header