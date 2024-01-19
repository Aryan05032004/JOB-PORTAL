// import React from 'react';

// const InputField = ({ handLeChange, value, title, name }) => {
//   return (
//     <div>
//       <label className='sidebar-label-container'>
//         <input type="radio" name={name} id="test" value={value} onChange={handLeChange} />
//         <span className='checkmark'></span>{title}
//       </label>

//       {/* Assuming you want to render another InputField, correct the prop name */}
//        <InputField handLeChange={handLeChange} value='Manchester' title='Manchester' name="test" /> 
//     </div>
//   );
// }

// export default InputField;

import React from 'react'

const InputField = ({handLeChange,value, title, name}) => {
  return (
      <label className='sidebar-label-container'>
      <input type="radio" name={name} id="test" value={value} onChange={handLeChange} />
      <span className='checkmark'></span>{title}
      </label>
  )
}

export default InputField