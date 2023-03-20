import { useState } from 'react'
import axios from "axios";

export default function Data() {

  // store message
  const [profileData, setProfileData] = useState([]);

  // receive message
  const getData = () => {
    axios({
      method: "GET",
      url: "http://localhost:8000/profile",
    })
      .then((response) => {
        const res = response.data
        setProfileData(({
          project: res.name,
          message: res.message,
          space: res.space
        }))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  };

  const sendData = () => {
    const data = {
      name: "tutraffic",
      email: "tutraffic@temple.edu"
    };
    axios({
      method: "POST",
      url: "http://localhost:8000/data",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
      <div className="App">
        <header className="App-header">
          <p>Profile</p><button onClick={getData}>Get data</button>
          {profileData && <div>
            <p>Project: {profileData.project}</p>
            <p>Message: {profileData.message}</p>
            <p>Parking Space: {profileData.space}</p>
          </div>
          }
          <button onClick={sendData}>Send data</button>
        </header>
      </div>
  );
}

