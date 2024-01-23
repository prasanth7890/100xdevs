import './App.css';
import { useRecoilState } from 'recoil';
import { nameAtom } from './atom';
import { useRef, useState } from 'react';


function App() {

  const [name, setName] = useRecoilState(nameAtom);

  const [wish, setWish] = useState(null);
  const [wish2, setWish2] = useState(null);

  const Wishes = [
    `Happy Birthday, ${name}! May your day be filled with laughter, joy, and unforgettable moments!`,
    `Wishing you a fantastic birthday, ${name}! May this year bring you success, happiness, and endless opportunities.`,
    `Happy Birthday, ${name}! May your special day be as sweet and amazing as you are!`,
    `Sending warm birthday wishes to ${name}! May this year be your best one yet, filled with love and exciting adventures.`,
    `Happy Birthday, ${name}! May your day be surrounded by friends, loved ones, and all the things that make you smile.`,
    `Wishing a spectacular birthday to ${name}! May your dreams come true and your year be filled with accomplishments.`,
    `Happy Birthday, ${name}! May your day be filled with surprises, love, and everything you've been hoping for.`,
    `Sending best wishes to ${name} on their birthday! May this year be filled with beautiful moments and wonderful memories.`,
    `Happy Birthday, ${name}! May your day be as bright and cheerful as your presence always is.`,
    `Wishing a fantastic birthday to ${name}! May your year ahead be marked with success, good health, and lots of happiness.`
  ];

  function generateWishes() {
    const indx1 = Math.floor(Math.random() * Wishes.length);
    const indx2 = Math.floor(Math.random() * Wishes.length);

    setWish(Wishes[indx1]);
    setWish2(Wishes[indx2]);
  }


  return (
    <div className='flex justify-center items-center relative top-20 flex-col'>
        <div className='bg-black h-[250px] w-[500px] rounded-md flex flex-col items-center justify-center mb-5 opacity-80'>
          <h2 className='text-3xl font-bold text-white mb-5'>Enter Your Name</h2>
          <input type="text" className='w-[400px] mb-5' onChange={(e)=>setName(e.target.value.trim())} value={name}/>
          <button className='w-[60px] h-[40px] bg-blue-600 rounded-md' onClick={generateWishes}>Done</button>
        </div> 

        {name.length > 0 ? (
          <div className='flex'>
            <Card wish={wish}/>
            <Card wish={wish2}/>
          </div>
        ) : (
          <></>
        )}

        
    </div>
  )
}

function Card({wish}) {
  return(
    <div className='max-h-[300px] max-w-[400px] bg-slate-100 rounded-md text-black font-bold pt-[40px] pb-[40px] pl-[30px] pr-[30px] text-center mr-3 ml-3'>
            <p>
              {wish == null ? "" : wish}
            </p>
    </div>
  )
}


export default App
