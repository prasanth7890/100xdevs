import { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    if(localStorage.getItem('token')) {
      navigate('/');
    }
    else {
      console.log('Login/SignIn First');
      return;
    }
  })


  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {

    const UserData = {
      "username": username,
      "firstName": firstName,
      "lastName": lastName,
      "password": password
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', UserData);
      if(response.statusText === "OK") {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
      
    }catch(error) {
      console.log(error);
    }
    
  }


  return (
    <div>
      <div className="bg-white w-[310px] rounded-md absolute left-[40%] top-[15%] border-black border-[1px] pl-[5px] pr-[5px]" >
        <div className='flex flex-col items-center pt-4'>
          <h1 className='text-3xl font-bold pb-2'>Sign Up</h1>
          <p className='text-center'>Enter your information to create an account</p>
        </div>

        <div className='flex flex-col items-center mt-2'>
          <div>
            <div className='font-bold mb-2'>First Name</div>
            <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text" placeholder='John' className='w-[280px] h-9 rounded-md pl-3 border-slate-300 border-[1px]'/>
          </div>

          <div>
            <div className='font-bold mb-2'>Last Name</div>
            <input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text" placeholder='Doe'className='w-[280px] h-9 rounded-md pl-3 border-slate-300 border-[1px]'/>
          </div>

          <div>
            <div className='font-bold mb-2'>Email</div>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='johndoe@example.com'className='w-[280px] h-9 rounded-md pl-3 border-slate-300 border-[1px]'/>
          </div>

          <div>
            <div className='font-bold mb-2'>Password</div>
            <input type={'password'} onChange={(e)=>setPassword(e.target.value)} value={password} className='w-[280px] h-9 rounded-md pl-3 border-slate-300 border-[1px]'/>
          </div>

        <button onClick={handleSubmit} className='bg-black text-white w-[280px] h-9 rounded-md mt-3 pb-1 mb-3'>Sign Up</button>

        <div className='mb-5'>Already have an account? <Link to={'/signin'} className="underline">Sign In</Link></div>

        </div>



      </div>
    </div>
  )
}

export default SignUp;
