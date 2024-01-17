import Profile from "./components/Profile"

function App() {
  const userDetails = {
    username: "Rita Correia",
    location: "London",
    age: "32",
    followerCount: "80K",
    likes: "803K",
    photoCount: "1.4K",
    image: ""
  }

  return (
      <div>
        <Profile user={userDetails}/>
      </div>
  )
}

export default App

// username, location, age, followerCount, likes, photoCount, image 