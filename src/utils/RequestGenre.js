const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    'primary_release_date.lte': '2023-01-01',
    region: 'au',
    sort_by: 'popularity.desc',
    with_original_language: 'en',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA2ZmVmOTU3M2Y3YTczM2UyMTc1NDM2MDgxNDYxNCIsInN1YiI6IjY2MjVmZDFkNjJmMzM1MDE3ZGRhOTVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eTTsWiVAtrOyFfvztbvZhN6WJnPllcRmFwTd300M7I4',
  },
};

export default options;

/*

  useEffect(() => {

    const modifiedOptions = {...options}

    modifiedOptions.params.with_genres = '35'

    axios
      .request(modifiedOptions)
      .then((response) => {
        console.log(response.data.results[0]);
      })
      .catch((err) => console.log(err));
  }, []);


*/