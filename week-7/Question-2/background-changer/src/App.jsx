import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white');

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  function handleClick(ele)
  {
    const newColor = ele.style.backgroundColor;
    if(newColor === 'orange') {
      setBgColor('white');
      return;
    }
    setBgColor(newColor);
  }

  return (
    <>
      <div className="bar">
        <button style={{background:"red"}} className='custom-btn' onClick={(e)=>handleClick(e.target)}>Red</button>
        <button style={{background:"yellow"}} className='custom-btn' onClick={(e)=>handleClick(e.target)}>Yellow</button>
        <button style={{background:"black", color: 'white'}} className='custom-btn' onClick={(e)=>handleClick(e.target)}>Black</button>
        <button style={{background:"purple"}} className='custom-btn' onClick={(e)=>handleClick(e.target)}>Purple</button>
        <button style={{background:"green"}} className='custom-btn' onClick={(e)=>handleClick(e.target)}>Green</button>
        <button style={{background:"blue"}} className='custom-btn' onClick={(e)=>handleClick(e.target)}>Blue</button>
        <button style={{background:"orange"}} className='custom-btn'onClick={(e)=>handleClick(e.target)}>Default</button>
      </div>
    </>
  )
}

export default App
