import React from 'react'
import Button from './Button'
import { useParams } from 'react-router-dom'

const Edit = () => {
const {id} = useParams();

  return (
    <main className='container border bg-slate-600 text-white mt-52 border-slate-800'>
      <div className='flex flex-col sm:mx-36 mx-3 my-7'>
        
        <h2 className='h2'>Update User</h2>
        
        <form>
          <div>
            <label 
              htmlFor="name" 
              className='text-lg'
            >
              Name
            </label>
            <br />
            <input 
              type="text" 
              name='name' 
              placeholder='Enter name...'
              className='border text-lg text-black ps-2 p-1 w-full max-w-xl'
            />
          </div>
          <div className='mt-5'>
            <label 
              htmlFor="email" 
              className='text-lg'
            >
              Email
            </label>
            <br />
            <input 
              type="email" 
              name='email' 
              placeholder='Enter email...'
              className='border text-lg text-black ps-2 p-1 w-full max-w-xl'
            />
          </div>
          <div>
            <Button
              type='submit' 
              label='Submit' 
              classes='bg-sky-500 mt-8 hover:bg-sky-400'
            />
          </div>
        </form>
      </div>
    </main>
  )
}

export default Edit