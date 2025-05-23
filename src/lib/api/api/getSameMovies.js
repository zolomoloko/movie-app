export const getSameMovies = async () => {
    const response=await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}/similar?language=en-US&page=1`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
        }
    )
    const same = await response.json();
    console.log("fff".same)
    return same?.results;
}