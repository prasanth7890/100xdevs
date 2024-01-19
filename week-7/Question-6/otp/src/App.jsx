import { useState } from 'react';
import './App.css'

function App() {
  const [render, setRender] = useState(false);

  function handleOnclick() {
    setRender(true);
  }

  function handleInput(target) {
    const value = target.value;
    
    if(isNaN(value)) {
      target.value = "";
      return;
    }

    if(value != "") {
      if(target.nextElementSibling) {
        target.nextElementSibling.focus(); //shifts focus to next element.
      }
    }
  }

  function handleOnkeyup(e) {
    const key = e.key;

    if(key == "Backspace") {
      e.target.value = "";
      const previous = e.target.previousElementSibling;
      if(previous) {
        previous.focus();
      }
    }
  }

  return (
    <>
      <div className="main">
        <div className="inner">
          <h2>Login Via OTP</h2>
          {render === false ? (
            <>
              <input type="text" placeholder="Enter your mobile number" />
              <button onClick={handleOnclick}>send OTP</button>
            </>
          ) : (
            <>
              <div className="otp-div">
                <input type="text" className="otp" onInput={(e)=>{handleInput(e.target)}} onKeyUp={(e)=>{handleOnkeyup(e)}}/>
                <input type="text" className="otp" onInput={(e)=>{handleInput(e.target)}} onKeyUp={(e)=>{handleOnkeyup(e)}}/>
                <input type="text" className="otp" onInput={(e)=>{handleInput(e.target)}} onKeyUp={(e)=>{handleOnkeyup(e)}}/>
                <input type="text" className="otp" onInput={(e)=>{handleInput(e.target)}} onKeyUp={(e)=>{handleOnkeyup(e)}}/>
              </div>
              <button>Login</button>
              <button onClick={()=>setRender(false)}>go back</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;