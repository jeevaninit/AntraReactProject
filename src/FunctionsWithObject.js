import React from 'react'

const FunctionsWithObject = () => {

    const userdetails={
        firstName:'Bhanu',
        lastName:'Prasad',
        age:20,
        img:'https://static.wixstatic.com/media/f02d5f_8c2864282a64462aab7dd0afb1a4c2d4~mv2.jpg/v1/crop/x_0,y_516,w_720,h_900/fill/w_540,h_676,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bfb40a18-a6ae-47d7-a674-4bc9a631e9fa.jpg'
    }

    const printuserdetails=()=>{
            return `UserName: ${userdetails.firstName} and LastName: ${userdetails.lastName} Age: ${userdetails.age}`
    }

  return (
    <div>
        <h1>Welcome to FunctionsWithObject</h1>

        <div className='mycontainer'>
        <p>
            Hello am from Function Info....
        </p>
        <p style={{display:'flex',flexDirection:'column'}}>
            <img src={userdetails.img} alt={userdetails.firstName} style={{height:'250px',width:'100%'}} />
            {printuserdetails()}
            
        </p>
        </div>

    </div>
  )
}

export default FunctionsWithObject