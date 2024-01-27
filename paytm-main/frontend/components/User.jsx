import React from 'react'
import {useNavigate} from 'react-router-dom';

const User = ({firstname, userId}) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/sendMoney', {state: {userId: userId, name: firstname}});  
  }

  return (
    <div className='flex justify-between p-3'>
        <div className='flex items-center'>
            <div className="bg-slate-200 w-[38px] h-[38px] rounded-full flex justify-center items-center">
                <div>{firstname[0].toUpperCase()}</div>
            </div>
            <h2 className='pl-3 text-2xl font-semibold'>{firstname}</h2>
        </div>
        <button onClick={handleClick} className='bg-black text-white rounded-md p-[8px] pt-1 font-semibold'>Send Money</button>
    </div>
  )
}

export default User;
