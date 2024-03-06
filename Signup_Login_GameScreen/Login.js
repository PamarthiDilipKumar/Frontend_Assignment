// Login.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    setError('');
  }, [username, password]);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    // Basic password strength validation
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    // Simulate login success
    localStorage.setItem('rememberMe', rememberMe ? 'true' : 'false');
    history.push('/game'); // Redirect to the game screen after successful login
  };

  return (
    <div className="container mx-auto mt-8 max-w-md p-8 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span className="ml-2 text-sm">Remember Me</span>
          </label>
          <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Signup here.
        </Link>
      </p>
    </div>
  );
};

export default Login;
