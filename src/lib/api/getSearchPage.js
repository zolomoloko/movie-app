export const getSearchPage = async (searchValue, page = 1) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?query=${searchValue}&language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const search = await response.json();
    return search;
  } catch (error) {
    console.log(error);
  }
};
