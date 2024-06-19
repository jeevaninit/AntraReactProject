import React from 'react'

const ApplystylesusingCondition = () => {

    const fruits=[
        {id:1,title:'Apple',isFruit:true},
        {id:2,title:'Cabbage',isFruit:false},
        {id:3,title:'Garlic',isFruit:false},
        {id:4,title:'Orange',isFruit:true},
    ]

    const listItems=fruits.map(fruit=>
        <li key={fruit.id} style={{color:fruit.isFruit?'Magenta':'darkgreen'}}>
            {fruit.title}
        </li>
    )

  return (
    <div>
        <h1>
        ApplystylesusingCondition
        </h1>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}

export default ApplystylesusingCondition