import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [user, setUser] = useState();

  useEffect(()=> {
    async function getInitState() {
      const response = await fetch(`https://api.github.com/users/hkirat`);
      const userDetails = await response.json();
      setUser(userDetails);
    }

    getInitState();
  },[]);

  async function handleClick() {
    const response = await fetch(`https://api.github.com/users/${state}`);
    const userDetails = await response.json();

    if(userDetails && userDetails.login) {
      setUser(userDetails);
    }
    else {
      alert('Enter a Valid Username');
      return;
    }
  }

  return (
    <>
      <div className="main">
        <div>
          <input
          placeholder="Enter Username"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>

        <h2>GITHUB INFO CARD</h2>

        <div className="profile-div">
          <div>
            <img
              src={user?.avatar_url}
              alt="image"
            />
          </div>

          <div><b>Name</b>: {user?.name}</div>

          <div className="username">
            <span><b>Username</b>: {user?.login}</span>
            <a target="_blank" href={user?.html_url}>GITHUB</a>
          </div>

          <div>
            <span className="location"><b>From</b>: {user?.location}</span>
            <span><b>Email</b>: {user?.email}</span>
          </div>

          <div className="stats">
            <div className="inner">
              <div><b>Repos</b></div>
              <div>{user?.public_repos}</div>
            </div>

            <div className="inner">
              <div><b>Followers</b></div>
              <div>{user?.followers}</div>
            </div>

            <div className="inner">
              <div><b>Following</b></div>
              <div>{user?.following}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
