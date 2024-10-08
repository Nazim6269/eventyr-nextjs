'use client';

import { loginUser } from '@/actions';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const [error, setError] = useState('');
  const { setAuth } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const user = await loginUser(formData);

      if (user) {
        setAuth(user);
        router.push('/');
      } else {
        setError('Please Provide valid credentials');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>

      <form className="login-form" onSubmit={handleSubmit}>
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
