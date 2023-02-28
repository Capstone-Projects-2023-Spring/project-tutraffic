import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css';

function App() {

   // store message
  const [profileData, setProfileData] = useState([]);

  // receive message
  function getData() {
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        project: res.name,
        about: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <div className="App">
      <header className="App-header">
        <p>Profile</p><button onClick={getData}>Get data</button>
        {profileData && <div>
              <p>Project: {profileData.project}</p>
              <p>About: {profileData.about}</p>
            </div>
        }
      </header>
    </div>
  );
}

export default App;
