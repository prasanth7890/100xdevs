import { useEffect, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const SendMoney = () => {
    const {state} = useLocation();
    const [amount, setAmount] = useState();
    const navigate = useNavigate();

    async function handleClick() {
        try {
            const receiverId = state.userId;
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const data = {
                "amount": amount,
                "to": receiverId,
            }
            const response = await axios.post('http://localhost:3000/api/v1/account/transfer', data , config); 
            
            if(response.status === 200) {
                alert(response.data.message + "✅");
                navigate('/');
            }

        } catch (error) {
            alert(error.message);
            navigate('/');
        }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center w-[350px] h-[300px] bg-white rounded-md shadow-md shadow-slate-300">
        <h2 className="text-2xl font-bold mb-10">Send Money</h2>

        <div>
            <div className="flex items-center justify-start w-[270px]">
                <div className="mr-3 bg-green-500 w-[38px] h-[38px] rounded-full flex justify-center items-center">
                    <div className="text-white font-semibold mb-0.5">A</div>
                </div>
                <h2 className="font-semibold text-xl">{state.name}</h2>
            </div>
            <div className="font-semibold text-sm mb-2">Amount (in Rs)</div>
        </div>
        <input
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
          type="text"
          placeholder="Enter amount"
          className="p-2 border-slate-200 border-[1px] w-[280px] rounded-md "
        />
        <button
          onClick={handleClick}
          className="bg-green-500 font-semibold text-white w-[280px] h-9 rounded-md mt-3 pb-1 mb-3"
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
