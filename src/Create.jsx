import React, { useState } from 'react'
import Button from './Button'
import { addUser } from './store/UserSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({
      id: users[users.length -1].id + 1,
      name,
      email
    }));
    navigate('/');
  }
  
  return (
    <main className='container border bg-slate-600 text-white mt-52 border-slate-800'>
      <div className='flex flex-col sm:mx-36 mx-3 my-7'>
        
        <h2 className='h2'>Add New User</h2>
        
        {/* add new user form */}
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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

export default Create