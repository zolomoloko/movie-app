import { DetailsTable } from "@/components/details/DetailsTable";
import { DetailsHeader } from "@/components/details/DetailsHeader";
import { DetailsMoreLike } from "@/components/details/DetailsMoreLike";
import { DetailsOverview } from "@/components/details/DetailsOverview";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { getMovieById } from "@/lib/api/api/getMovieById";
import { useEffect, useState } from "react";
import { getSameMovies } from "@/lib/api/api/getSameMovies";
import { Footer } from "@/components/Footer";
import { getTrailer } from "@/lib/api/api/getTrailer";
import { Trailer } from "@/components/details/Trailer";

const Details = () => {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});
  
  const [simi, setSimi] = useState([]);

  const [movieTrailer, setMovieTrailer] = useState([]);
  console.log("trailer", movieTrailer)

const trailers = async()=>{
  try {
    const movieTrailer = await getTrailer(movieId)
    setMovieTrailer(movieTrailer)
  } catch (error) {
    
  }
}

const similar =async()=>{
  try {
    const same = await getSameMovies(movieId)
    setSimi(same)
  } catch (error) {
    
  }
}
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    getMovie();
    similar();
  }, [movieId]);
  return (
    <div>
      <Header />
      <div className="md:max-w-[1100px] mx-auto pt-[52px]">
       
        <DetailsHeader movie={movie}/>
        <DetailsOverview movie={movie}/>
        <DetailsTable movie={movie}/>
        <DetailsMoreLike simi={simi}/>
        <Trailer movieTrailer={movieTrailer}/>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Details;
