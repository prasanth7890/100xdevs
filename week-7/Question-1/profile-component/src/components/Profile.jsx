import React from "react";
import "./Profile.css";

function Profile(props) {
  const { username, location, age, followerCount, likes, photoCount, image } =
    props.user;
  return (
    <div style={{height: "340px", width: "340px", display: "flex", flexDirection: "column", border: "1px solid black"}}>
      <div className="image">
        <img
          src="https://i.pinimg.com/originals/5a/26/db/5a26db0dad10a1770caf4d61a247b464.jpg"
          alt="displaypicture"
        />
      </div>
      <div className="background"></div>
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
        <div style={{height: 50}}></div>
        <div style={{marginTop: '4px'}}>
          <span><b>{username}</b></span> <span>{age}</span>
        </div>
        <span style={{marginBottom: "8px", marginTop: "10px"}}>{location}</span>
      </div>
      <div style={{backgroundColor: "black", height: "1px", marginTop: '10px'}}></div>
      <div style={{ display: "flex", justifyContent: "space-around", paddingTop: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div><b>{followerCount}</b></div>
          <span>Followers</span>
        </div>
        <div>
          <div><b>{likes}</b></div>
          <span>Likes</span>
        </div>
        <div>
          <div><b>{photoCount}</b></div>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
