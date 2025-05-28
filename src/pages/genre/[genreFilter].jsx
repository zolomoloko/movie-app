import { GenresButton } from "@/components/genre/GenresButton";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { getGenreFilter } from "@/lib/genreFilter/getGerneFilter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GenrePage = () => {
  const router = useRouter();
  const genreName = router.query?.genreFilter;
  const [movieFilter, setmovieFilter] = useState({});
 
  useEffect (() => {
    if (!genreName) return;
    const getFilter = async () => {
        const data = await getGenreFilter(genreName);
        console.log("[[[[[[[",data)
        setmovieFilter(data);
    }
    getFilter()
  }, [genreName]);

  if (!movieFilter || !movieFilter.results) return null
  const kino = movieFilter.results
  console.log("iiii",kino)

  
  return (
    <div>
      <Header />
      <div className="w-screen md:max-w-[1800px] mx-auto pt-[52px]">
        <p className="font-semibold text-[30px]">Search filter</p>
        <div className="flex pt-8 gap-10">
          <div className="w-[385px]">
            <GenresButton />
          </div>
          <div className="p-5">
            <p>81 title in "Animation"</p>
            <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4  md:max-w-[1400px]">
                {kino?.map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenrePage;
