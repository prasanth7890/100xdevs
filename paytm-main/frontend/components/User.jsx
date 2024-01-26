import React from 'react'

const User = ({firstname, lastname}) => {
  return (
    <div className='flex justify-between p-3'>
        <div className='flex items-center'>
            <div className="bg-slate-200 w-[38px] h-[38px] rounded-full flex justify-center items-center">
                <div>{firstname[0].toUpperCase()}</div>
            </div>
            <h2 className='pl-3 text-2xl font-semibold'>{firstname}</h2>
        </div>
        <button className='bg-black text-white rounded-md p-[8px] pt-1 font-semibold'>Send Money</button>
    </div>
  )
}

export default User;
