import React from 'react'
/* Creating Multi Objects and render with Multi Conditions */
const ConditionTesting_02 = () => {

    const student1={name:'Shiva',grade:85};
    const student2={name:'Bhanu',grade:80};

    //check condition
    const highergradestudent=student1.grade>student2.grade?student1:student2;

  return (
    <div>
        <h1>ConditionTesting_02</h1>
        <p>
            {highergradestudent.name},
            {highergradestudent.grade}
        </p>
        
        {highergradestudent===student1 && (<>
        <p>
          {highergradestudent.name} is doing Great!
        </p>
        </>)}

        {highergradestudent===student2 && (<>
        <p>
          {highergradestudent.name} is excelling!
        </p>
        </>)}
    </div>
  )
}

export default ConditionTesting_02