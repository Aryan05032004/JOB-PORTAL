import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.skills = selectedOption;
    console.log(data);
  };

  const options = [ 
    {value:"Javascript", label:"Javascript"},
    {value:"c++", label:"c++"},
    {value:"HTML", label:"HTML"},
    {value:"CSS", label:"CSS"},
    {value:"React", label:"React"},
    {value:"Node", label:"Node"},
    {value:"Python", label:"Python"},
    {value:"Java", label:"Java"},
    {value:"MongoDB", label:"MongoDB"},]


  return (
    <div className='max-w-screen-2xl container mx-auto x1:px-24 px-4'>
      {/* first row*/}
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-x-5'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input
                type='text'
                defaultValue={'Web Developer'}
                {...register('JobTitle')}
                className='create-job-input'
              />
            </div>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input
                type='text'
                placeholder='Example: Microsoft'
                {...register('CompanyName')}
                className='create-job-input'
              />
            </div>
          </div>

          {/* second row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input
                type='text'
                placeholder='$20k'
                {...register('minPrice')}
                className='create-job-input'
              />
            </div>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input
                type='text'
                placeholder='$120k'
                {...register('maxPrice')}
                className='create-job-input'
              />
            </div>
          </div>

          {/* third row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Salary type</label>
              <select {...register("salaryType")} className='create-job-input'>
        <option value="">Choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

            </div>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input
                type='text'
                placeholder='Example: New York'
                {...register('JobLocation')}
                className='create-job-input'
              />
            </div>
          </div>
  {/* fourth row */}
  <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
  <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input
                type='date'
                placeholder='Example: 2024-1-15'
                {...register('postingDate')}
                className='create-job-input'
              />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select {...register("experienceLevel")} className='create-job-input'>
        <option value="">Choose Your Experience Level</option>
        <option value="NoExperience">No Experience</option>
        <option value="Internship">Internship</option>
        <option value="Work remotely">Work remotely</option>
      </select>

            </div>

           
          </div>
            {/* fifth row */}
            <div>
            <label className='block mb-2 text-lg'>Required Skill Set</label>

<CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti />
    

            </div>


 
          {/* Additional form fields go here */}
          {/* register your input into the hook by invoking the "register" function */}
          <input type='submit' className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm' />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
