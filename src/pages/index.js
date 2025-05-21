import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { UpComing } from "@/components/UpComing";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [upComingMovie, setUpComingMovie] = useState([]);
  
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept:"application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json()
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  }

  const getUpComingMovie = async () => {
    try {
      const uildel = await fetch(

      )
    }catch{
    
    }
  }

  useEffect(()=>{
    getNowPlayingMovies();
  }, []);






  return (
    <div>
        <div className="w-screen md:max-w-[2000px] mx-auto">
          <Header />
        </div>
        <MovieCarousel nowPlayingMovie={nowPlayingMovie}/>
        <div className="w-screen md:max-w-[2000px] mx-auto">
          <UpComing/>
          <Popular/>
          <TopRated/>
        </div>
        <Footer />
    </div>
  );
}
