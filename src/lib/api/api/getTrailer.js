export const getTrailer = async (id) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}/videos?language=en-US`,
         {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
        }
    )
    const trailer = await response.json();
    return trailer;
}