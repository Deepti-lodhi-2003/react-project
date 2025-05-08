import React from 'react'

const Users = () => {
  return (
    <ul className='w-[30%]'>

       <li className=' flex item-center justify-between bg-white shadow-lg rounded p-2 font-thin mb-3'>
        <p>
        <span className='block text-3xl mb-1'>User name</span>
        <small className='text-lg'>user@gmail.com</small>
        </p>
        <span className='hover:cursor-pointer font-normal text-red-500'></span>
       </li>

       <li className=' flex item-center justify-between bg-white shadow-lg rounded p-2 font-thin mb-3'>
        <p>
        <span className='block text-3xl mb-1'>User name</span>
        <small className='text-lg'>user@gmail.com</small>
        </p>
        <span className='hover:cursor-pointer font-normal text-red-500'></span>
       </li>
       
    </ul>
  )
}

export default Users