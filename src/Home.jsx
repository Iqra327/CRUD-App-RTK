import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button';
import { Link } from 'react-router-dom';
import Edit from './Edit';

const Home = () => {
  const users = useSelector((state) => state.users);

  return (
    <section className='container mt-14'>
      <div className='flex flex-col gap-4 flex-wrap'>
        
        <h2 className='h2'>
          CRUD APP
        </h2>
        
        <div>
          <Link to='/create'>
            <Button 
              label='Create +' 
              classes='bg-green-800 hover:bg-green-700 '
            />
          </Link>
        </div>
        
        <table className='text-center'>
          <thead className='border'>
            <tr>
              <th className='p-2'>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index) => (
                <tr className='border' key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className=''>
                    <Link to={`/edit/${user.id}`}>
                      <Button 
                        label='Edit' 
                        classes='bg-sky-500 hover:bg-sky-600'
                      />
                    </Link>
                    
                    <Link to='/delete'>
                      <Button 
                        label='Delete'
                        classes='bg-red-500 hover:bg-red-600'
                      />
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Home