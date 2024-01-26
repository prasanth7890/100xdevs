import {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import User from '../components/User';
import { useNavigate } from 'react-router-dom';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { balance, loggeduser, usersatom } from '../src/atom';
import axios from 'axios';

const DashBoard = () => {
  return <RecoilRoot>
          <RenderDashboard />
        </RecoilRoot>
}

function RenderDashboard() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')) {
      navigate('/signup');
      return; 
    }
  });
  
  const [users, setUsers] = useRecoilState(usersatom);
  const currUser = useRecoilValue(loggeduser);
  const userBalance = useRecoilValue(balance);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    async function searchUser() {
      const {data} = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`);
      setUsers(data.users);
    }

    searchUser();
  }, [search])

  return (
    <div>
      <Navbar username={currUser.username}/>
      <div className='m-3 flex flex-col'>
        <h3 className='text-xl font-bold'>Your Balance  ${userBalance}</h3>
        <h3 className='text-xl font-bold mt-3 mb-3'>Users</h3>
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder='Search users...' className='p-2 border-slate-200 border-[1px] w-[100%] rounded-md '/>
      </div>

      {users.map(user => {
        return <User key={user._id} firstname={user.firstName} lastname={user.lastName}/>
      })}
      
    </div>
  )
}

export default DashBoard;