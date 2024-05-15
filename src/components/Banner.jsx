import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import options from '../utils/RequestTrending';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const increaseIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    intervalRef.current = setInterval(increaseIndex, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [movies]);

  return (
    <div className='w-full h-[300px] md:h-full'>
      <div className='absolute w-full h-[300px] md:h-screen md:bg-black/60'></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movies[currentIndex]?.backdrop_path}`}
        alt={movies[currentIndex]?.title}
        className='w-full h-[300px] md:h-screen object-cover'
      />
    </div>
  );
};
export default Banner;
