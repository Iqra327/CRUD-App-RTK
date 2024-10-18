import React, { useState } from 'react'
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './store/UserSlice';

const Edit = () => {

  const {id} = useParams();
  
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id === Number(id) );

  const {name, email} = existingUser[0];
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: Number(id),
      name: uname,
      email: uemail
    }))
    navigate('/');
  }


  return (
    <main className='container border bg-slate-600 text-white mt-52 border-slate-800'>
      <div className='flex flex-col sm:mx-36 mx-3 my-7'>
        
        <h2 className='h2'>Update User</h2>
        
        <form onSubmit={handleUpdate}>
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
              value={uname}
              onChange={(e) => setUname(e.target.value)}
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
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
              className='border text-lg text-black ps-2 p-1 w-full max-w-xl'
            />
          </div>
          <div>
            <Button
              type='submit' 
              label='Update' 
              classes='bg-sky-500 mt-8 hover:bg-sky-400'
            />
          </div>
        </form>
      </div>
    </main>
  )
}

export default Edit