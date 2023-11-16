import React, { useState } from 'react';
import { Form, Button } from './FormElements'; // Import your styled components

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add your Firebase authentication code here
    // For example, to create a new user with email and password:
    // auth.createUserWithEmailAndPassword(formData.email, formData.password)
    // Then, you can handle success or error accordingly

    // Reset the form data
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};