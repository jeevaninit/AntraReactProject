import React from 'react'
import PrintStateValuesUsingProps from './PrintStateValuesUsingProps'

const StateToProps = () => {
    const statevalues={
        firstName:'Sree',
        lastName:'Aadhyathmika',
        place:'Hyderabad'

    }
  return (
    <div>
    <h3>StateToProps</h3>

    

    <PrintStateValuesUsingProps 
    fn={statevalues.firstName}
    ln={statevalues.lastName}
    address={statevalues.place}
    />



    </div>
  )
}

export default StateToProps