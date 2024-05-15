const Movie = ({ movie }) => {
  const releaseDate = movie?.release_date
    ? movie?.release_date.slice(0, 4)
    : '';

  return (
    <div className='w-full h-full'>
      <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] lg:w-[1100px] mx-auto'>
        <div className='absolute w-full h-full'></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className='w-full h-full object-cover rounded'
        />
      </div>
      <div className='flex flex-col items-center space-y-2 p-2 md:my-4 lg:w-[900px] mx-auto'>
        <h1 className='text-3xl md:text-4xl'>{movie?.title}</h1>
        <p className='text-2xl font-light text-[#a23939] md:text-3xl'>
          {releaseDate}
        </p>
        <p className='text-center md:text-2xl md:font-light '>
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};
export default Movie;
