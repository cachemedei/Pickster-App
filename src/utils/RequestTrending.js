const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/week',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA2ZmVmOTU3M2Y3YTczM2UyMTc1NDM2MDgxNDYxNCIsInN1YiI6IjY2MjVmZDFkNjJmMzM1MDE3ZGRhOTVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eTTsWiVAtrOyFfvztbvZhN6WJnPllcRmFwTd300M7I4',
  },
};

export default options;
