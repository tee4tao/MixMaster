'use client'

import { useState } from "react"

const NewsLeter = () => {
  const [formSubmit, setFormSubmit]= useState(false)
  return (
    <div className="card card-compact w-screen max-w-lg bg-base-100 shadow-xl mt-12">
 <h2 className='text-center text-xl mb-4'>Our Newsletter</h2>
  <form className="card-body">
    <div className='flex flex-col'>
    <label htmlFor="name">Name</label>
    <input type='text' name='name' autoFocus className=' bg-gray-200 rounded-md text-base text-black' required/>
    </div>
    <div className='flex flex-col'>
    <label htmlFor="lastname">Lastname</label>
    <input type='text' name='lastname' className=' bg-gray-200 rounded-md text-base text-black' required/>
    </div>
    <div className='flex flex-col'>
    <label htmlFor="email">Email</label>
    <input type='email' name='email' className=' bg-gray-200 rounded-md text-base text-black' required/>
    </div>
    <div className="card-actions justify-center mt-4">
      {!formSubmit? <button className="btn btn-primary btn-sm" onClick={()=>setFormSubmit(true)}>Submit</button>:<button className="btn border-white btn-sm">
  <span className="loading loading-spinner"></span>
  loading
</button>}
    
    </div>
  </form>
</div>
  )
}

export default NewsLeter