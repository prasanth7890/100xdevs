import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [user, setUser] = useState();

  async function handleClick() {
    const response = await fetch(`https://api.github.com/users/${state}`);
    const userDetails = await response.json();
    
    if(userDetails) {
      console.log(userDetails);
    }
  }

  return (
    <div className="main">
      <div>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>

      <div className="profile-div">
        <div>
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/65/54/cute-anime-girl-in-black-hoodie-and-green-eyes-vector-39706554.jpg"
            alt="image"
          />
        </div>

        <div>Prasanth</div>

        <div className="username">
          <span>prasanth7890</span>
          <a href="">GITHUB</a>
        </div>

        <div>
          <span className="location">From: location</span>
          <span>email: useremail</span>
        </div>

        <div className="stats">
          <div className="inner">
            <div>Repos</div>
            <div>count</div>
          </div>

          <div className="inner">
            <div>followers</div>
            <div>count</div>
          </div>

          <div className="inner">
            <div>following</div>
            <div>count</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
