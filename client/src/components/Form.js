import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';
import '../css/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    pnumber: '',
    role: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/create', formData);
      console.log(response.data);
      setOpenSnackbar(true);
      setFormData({
        username: '',
        password: '',
        pnumber: '',
        role: ''
      });
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div className="form-container">
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="pnumber" placeholder="Phone Number" value={formData.pnumber} onChange={handleChange} required />
        <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Form;
