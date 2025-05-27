export const getCategory = async (categoryName) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );
  const category = await response.json();
  return category?.results;
};
