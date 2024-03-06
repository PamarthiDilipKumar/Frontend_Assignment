// Signup.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError('');
  }, [username, email, password, confirmPassword, name, termsChecked]);

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    // Validate password and confirm password
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and confirm password do not match.');
      return;
    }

    if (!termsChecked) {
      setError('Please accept the terms and conditions.');
      return;
    }

    // Simulate signup success
    setSuccess(true);
    setTimeout(() => {
      history.push('/login');
    }, 2000);

    // Simulate sending welcome email (no actual email sending required)
    console.log(`Welcome email sent to ${email}`);
  };

  return (
    <div className="container mx-auto mt-8 max-w-md p-8 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">Signup successful!</div>}
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name (Optional)
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">
            Profile Picture (Optional)
          </label>
          <input
            type="file"
            id="profilePicture"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <span className="ml-2 text-sm">I agree to the terms and conditions</span>
          </label>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
          onClick={handleSignup}
        >
          Signup
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here.
        </Link>
      </p>
    </div>
  );
};

export default Signup;
