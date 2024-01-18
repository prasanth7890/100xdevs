import './App.css';

function App() {
  return (
    <div className='main'>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="profile-div">
        <img src="" alt="image" />
        <div>
          <div>name</div>
          <div>
            <span>username</span>
            <a href="">URL</a>
          </div>
        </div>

        <div>
          <span>location: location</span>
          <span>email: useremail</span>
        </div>

        <div style={{display: "flex"}}>
          <div>
            <div>public repos</div>
            <span>count</span>
          </div>
          <div>
            <div>followers</div>
            <span>count</span>
          </div>
          <div>
            <div>following</div>
            <span>count</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;