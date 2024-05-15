import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          src={`https://academics.winona.edu/povwinona/wp-content/uploads/sites/4/2023/09/collage.jpg`}
          className='hidden sm:block absolute w-full h-full object-cover'
        />
        <div className='w-full h-screen bg-black/60 fixed top-0 left-0'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-[#212323]/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-4xl text-center font-bold'>Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 rounded bg-gray-300 text-black'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 rounded bg-gray-300 text-black'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                {error ? (
                  <p className='p-2 bg-red-400 my-3 rounded'>{error}</p>
                ) : null}
                <button className='bg-[#a23939] py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
                <div className='flex items-center justify-between text-md text-black-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember Me
                  </p>
                </div>
                <p className='py-8 text-center'>
                  <span className='mr-2 font-medium'>
                    Don't have an account?
                  </span>{' '}
                  <Link className='font-bold' to='/signup'>
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogIn;
