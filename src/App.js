import React, { useState } from 'react';
import './App.css';

const UserForm = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({}); // New state variable to store form data

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    setFormData(newUser); // Update the form data state
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" value="Create User" />
      </form>

      <div>
        <h2>Form Data:</h2>
        <p>Firstname: {formData.firstname}</p>
        <p>Lastname: {formData.lastname}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    </div>
  );
};

export default UserForm;
