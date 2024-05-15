import SavedMovies from '../components/SavedMovies';

const Account = () => {
  return (
    <>
      <div className='w-full'>
        <img
          src={`https://academics.winona.edu/povwinona/wp-content/uploads/sites/4/2023/09/collage.jpg`}
          className='w-full h-[400px] object-cover'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] left-[5%] p-4 md:p-8'>
          <h1 className='text-4xl md:text-6xl font-bold'>My Account</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};
export default Account;
