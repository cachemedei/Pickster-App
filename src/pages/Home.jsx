import Banner from '../components/Banner';
import ChooseGenre from '../components/ChooseGenre';

const Home = ({ movieId }) => {
  return (
    <>
      <Banner />
      <ChooseGenre movieId={movieId} />
    </>
  );
};
export default Home;
