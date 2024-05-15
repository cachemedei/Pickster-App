import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDice } from 'react-icons/fa';
import GENRES from '../utils/GenreData';

const ChooseGenre = ({ movieId }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const diceRoll = () => {
    if (selectedGenre !== null) {
      let genreCode = selectedGenre;
      movieId(genreCode);
    } else return;
  };

  return (
    <div className='flex flex-col items-start justify-evenly w-fit mx-auto h-[500px] text-2xl md:absolute md:top-[30%] md:left-[15%] md:text-4xl md:h-[650px]'>
      {GENRES.map((genre, i) => (
        <label key={i} htmlFor={i}>
          <input
            className='accent-[#a23939] w-5 h-5 mr-4'
            type='radio'
            name='genre'
            id={i}
            value={genre.code}
            onChange={(e) => setSelectedGenre(e.target.value)}
          />
          {genre.title}
        </label>
      ))}
      <Link to='/result' className='text-[70px] text-[#a23939] w-full'>
        <FaDice onClick={diceRoll} className='w-full mx-auto' />
      </Link>
      <p className='text-sm w-full text-center'>ROLL THE DICE</p>
    </div>
  );
};
export default ChooseGenre;
