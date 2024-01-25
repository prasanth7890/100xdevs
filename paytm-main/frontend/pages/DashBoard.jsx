import {useEffect} from 'react';
import Navbar from '../components/Navbar';
import User from '../components/User';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')) {
      navigate('/signup');    
    }
  })


  return (
    <div>
      <Navbar />
      <div className='m-3'>
        <h3 className='text-xl font-bold'>Your Balance  $5000</h3>
        <h3>Users</h3>
        <input type="text" placeholder='Search users...' className='p-2 border-slate-200 border-[1px] w-[100%] rounded-md'/>
      </div>

      <div>
        <User></User>
      </div>
    </div>
  )
}

export default DashBoard;