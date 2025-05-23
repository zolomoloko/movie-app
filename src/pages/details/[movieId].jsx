import { DetailsTable } from "@/components/DetailsTable";
import { DetailsHeader } from "@/components/DetailsHeader";
import { DetailsMoreLike } from "@/components/DetailsMoreLike";
import { DetailsOverview } from "@/components/DetailsOverview";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { getMovieById } from "@/lib/api/api/getMovieById";
import { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});
  console.log("lllll",movie);
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);
  return (
    <div>
      <Header />
      <div className="md:max-w-[1100px] mx-auto">
       
        <DetailsHeader movie={movie}/>
        <DetailsOverview movie={movie}/>
        <DetailsTable movie={movie}/>
        <DetailsMoreLike />
        
      </div>
    </div>
  );
};

export default Details;
