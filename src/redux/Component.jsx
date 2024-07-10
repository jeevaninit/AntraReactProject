import React from 'react'
import {connect} from 'react-redux'
import { DecAction,IncAction } from './action'

const Component = ({count,myname,address,city,IncAction,DecAction}) => {
  return (
    <div>
        <h1>React Redux</h1>
        <p>{myname}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{count}</p>
        <button onClick={IncAction}>Increment</button>
        <button onClick={DecAction}>Decrement</button>
    </div>
  )
}

const mapStateToProps=(state)=>({
    count:state.count,
    myname:state.myname,
    address:state.mydata.address,
    city:state.mydata.city
})

export default connect(mapStateToProps,{IncAction,DecAction})(Component)