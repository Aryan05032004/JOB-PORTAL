import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaRocket } from "react-icons/fa";


const Newsletter = () => {
  return (
    <div >
        <div>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <MdEmail />  Email me for jobs</h3>
            <p className='text-primary/75 text-base mb-4'>Stay updated with the latest job opportunities tailored just for you! Subscribe to our job alerts, and we'll email you with new and relevant job listings matching your preferences. Don't miss out on your dream job</p>

<div className='w-full space-y-4'>
 <input type='email'name='email' id='email' placeholder='Enter your email' className='w-full block py-2 -l-3 border focus:outline-none' />
<input type='submit' value='Subscribe' className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />


</div>
        </div>

        <div className='mt-20'>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaRocket />
  Get noticed faster</h3>
            <p className='text-primary/75 text-base mb-4'>Get noticed faster by potential employers – upload your resume today and stand out from the crowd with our streamlined application process</p>

<div className='w-full space-y-4'>
 
<input type='submit' value='Subscribe' className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />


</div>
        </div>
    </div>
  )
}

export default Newsletter