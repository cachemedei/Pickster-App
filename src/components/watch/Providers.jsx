import { useState, useEffect } from 'react';
import axios from 'axios';
import Service from './Service';

const Providers = ({ movieId }) => {
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA2ZmVmOTU3M2Y3YTczM2UyMTc1NDM2MDgxNDYxNCIsInN1YiI6IjY2MjVmZDFkNjJmMzM1MDE3ZGRhOTVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eTTsWiVAtrOyFfvztbvZhN6WJnPllcRmFwTd300M7I4',
    },
  };

  useEffect(() => {
    if (movieId) {
      axios
        .request(options)
        .then((response) => {
          setData(response.data.results.AU);
        })
        .catch((err) => console.error(err));
    } else return;
  }, []);

  return (
    <div className='w-full h-auto flex justify-evenly p-4 lg:w-[700px] mx-auto'>
      <Service data={data.flatrate} type='Subscribe' />
      <Service data={data.rent} type='Rent' />
      <Service data={data.buy} type='Purchase' />
    </div>
  );
};
export default Providers;
