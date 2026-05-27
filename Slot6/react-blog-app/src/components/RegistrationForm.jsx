import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!form.password) {
      newErrors.password = 'Password is required.';
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = 'Password must be at least 6 characters and include uppercase, lowercase, number, and special character.';
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validate()) {
      console.log('Registration success', form);
      setSuccessMessage(`✅ Đăng ký thành công! Chào mừng ${form.username}`);
      setShowSuccess(true);
      
      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  };

  const handleCancel = () => {
    setForm({ username: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="registration-form" style={{ border: '2px solid #e0e0e0', borderRadius: '10px', maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          {successMessage}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            isInvalid={submitted && !!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            isInvalid={submitted && !!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            isInvalid={submitted && !!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            isInvalid={submitted && !!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="button-group" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Button variant="primary" type="submit" style={{ minWidth: '100px' , width: '100px'}} >
            Register
          </Button>
          <Button variant="secondary" type="button" onClick={handleCancel} style={{ minWidth: '100px' , width: '100px'}}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
