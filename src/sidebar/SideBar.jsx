import React from 'react'
import Location from './Location'                           
import Salary from './Salary'

import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'

const SideBar = ({handLeChange, handLeClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'> FIlters</h3>
    
    <Location handLeChange={handLeChange}/>
    <Salary handLeChange={handLeChange} handLeClick={handLeClick}/>
    <JobPostingData handLeChange={handLeChange}/>
    <WorkExperience handLeChange={handLeChange}/>
    <EmploymentType handLeChange={handLeChange}/>
    </div>
  )
}

export default SideBar  
// import React from 'react'

// const SideBar = () => {
//   return (
//     <div>SideBar</div>
//   )
// }

// export default SideBar