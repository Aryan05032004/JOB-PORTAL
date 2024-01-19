import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handLeChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Type of Employement</h4>
    <div>
      <label className='sidebar-label-container'>
        <input type="radio" name="test" id="test" value="" onChange={handLeChange} />
        <span className='checkmark'></span>All
      </label>
      <InputField handLeChange={handLeChange} value="temporary" title="Temporary" name="test" />
      <InputField handLeChange={handLeChange} value="full-time" title="Full-time" name="test" />
      <InputField handLeChange={handLeChange} value="part-time" title="Part-time" name="test" />
     
    </div>
  </div>
  )
}

export default EmploymentType