import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import options from '../utils/RequestGenre';
import Movie from '../components/Movie';
import Providers from '../components/watch/Providers';
import { FaDice, FaHeart, FaRegHeart } from 'react-icons/fa';
import { RiArrowGoBackLine } from 'react-icons/ri';

const Result = ({ genreId }) => {
  const [movie, setMovie] = useState(null);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const modifiedOptions = { ...options };
  let id;
  if (genreId) {
    id = genreId;
  } else return;
  modifiedOptions.params.with_genres = id;

  const fetchMovie = () => {
    setLike(false);
    setMovie(null);
    axios
      .request(modifiedOptions)
      .then((response) => {
        const index = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[index]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      {movie && (
        <div className='w-full h-full'>
          <div className='flex items-center justify-evenly w-[80%] lg:w-[60%] mx-auto py-4'>
            <Link to='/'>
              <RiArrowGoBackLine className='text-4xl lg:text-7xl text-[#a23939] w-full text-center' />
              <span className='text-xs lg:text-xl'>BACK</span>
            </Link>
            <button onClick={fetchMovie}>
              <FaDice className='text-5xl lg:text-8xl w-full text-center' />
              <span className='text-xs lg:text-xl'>ROLL AGAIN</span>
            </button>
            <button onClick={saveMovie}>
              {like ? (
                <p>
                  <FaHeart className='text-4xl lg:text-7xl text-[#a23939] text-center w-full' />
                  <span className='text-xs lg:text-xl'>ADDED</span>
                </p>
              ) : (
                <p>
                  <FaRegHeart className='text-4xl lg:text-7xl text-[#a23939] text-center w-full' />
                  <span className='text-xs lg:text-xl'>ADD TO LIST</span>
                </p>
              )}
            </button>
          </div>
          <Movie movie={movie} />
          <Providers movieId={movie?.id} />
        </div>
      )}
    </>
  );
};
export default Result;
