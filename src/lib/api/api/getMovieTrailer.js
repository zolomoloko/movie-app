export const getMovieTrailer = async (movieId) => {
   try {
     const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`,
         {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
        }
    )
    const movie = await response.json();
    return movie;
   } catch (error) {
    console.log(error)
   }
}