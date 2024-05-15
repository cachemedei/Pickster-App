import { Route, Routes } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import Home from './pages/Home';
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Result from './pages/Result';
import About from './pages/About';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  const [genreId, setGenreId] = useState('');

  const movieId = (id) => {
    let data = id;
    setGenreId(data);
  };

  return (
    <>
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home movieId={movieId} />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/about' element={<About />} />
          <Route path='/result' element={<Result genreId={genreId} />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};
export default App;
