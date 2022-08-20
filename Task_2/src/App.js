import "./style.css";
import React, { useState } from "react";

function App() 
{
  const [users, setUsers] = useState();
  const getUsers = async () => 
  {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>
      <div className="container">
        <nav>
          <h1>Let's Grow Internship Task 2</h1>
          <div>
            <button className="btn" onClick={getUsers}>
              GET USERS
            </button>
          </div>
        </nav>
      </div>
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-avatar" alt="..." />
              <div className="card-body">
                <h3 className="card-text">ID: {current.id}</h3>
                <h3 className="card-text">
                  {" "}
                  Name: {current.first_name} {current.last_name}
                </h3>
                <h3 className="card-text">Email: {current.email}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;