import React from 'react'
import Menunavbar from './Menunavbar';
import ImageContainer from './ImageContainer';

//Rendering with Ternary Operator
const ConditionalRendering = () => {

    const isLoggedIn=false;

  return (
    <div>
        <h1>ConditionalRendering</h1>
        {/* {isLoggedIn?<h1>Welcom to Login Page Hi Mr. Jeeevan</h1>:<h1>Please logIn..</h1>} */}
        {isLoggedIn?<RenderwithLogicalOperator />:<RenderwithIfStatements />}
    </div>
  )
}

const RenderwithLogicalOperator=()=>{

  const isLoggedIn=false;  

    return(
        <>
        {isLoggedIn && <Menunavbar />}
        {!isLoggedIn && <ImageContainer />}
        </>
    )
}

const RenderwithIfStatements=()=>{

  const userRole='jee'

  let content;

  if(userRole==='admin'){
    content=<h1>Admin Dashboard...</h1>
  }
  else if(userRole==='user'){
    content=<h1>User Dashboard...</h1>
  }else {
    content=<h1>Guest Dashboard...</h1>
  }

  return(
    <>
    {content}
    </>
  )

}


export default ConditionalRendering