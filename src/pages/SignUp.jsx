import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
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
              <h1 className='text-4xl font-bold text-center'>Create Account</h1>
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
                <button className='bg-[#a23939] py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex items-center justify-between text-md'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember Me
                  </p>
                </div>
                <p className='py-8 text-center'>
                  <span className='mr-2 font-medium'>
                    Already have an account?
                  </span>{' '}
                  <Link className='font-bold' to='/login'>
                    Sign In
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
export default SignUp;
