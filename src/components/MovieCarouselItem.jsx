import { Star } from "lucide-react";
import Link from "next/link";
import { MovieTrailer } from "./details/MovieTrailer";

export const MovieCarouselItem = ({ movie, movieId}) => {
  console.log("dd",movieId)
  return (
    <div className="relative">
      <Link href={`/details/${movieId}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="cart"
          className="w-screen min-h-[246px] lg:max-h-[800px] md:relative object-cover"
        />
      </Link>
        <div className="flex flex-col gap-[16px] m-[20px] md:absolute top-[178px] left-[140px] md:w-[404px] md:text-white">
          <div className="flex  h-[52px] justify-between items-center">
            <div>
              <p className="font-normal text-[14px]">Now Playing:</p>
              <p className="font-semibold text-[24px]">{movie?.title}</p>
            </div>

            <div className="flex gap-[4px] items-center">
              <Star className="h-[16px} w-[16px] fill-yellow-300 text-yellow-300" />
              <div className="flex">
                <p className="font-semibold text-[18px] text-[#09090b] md:text-white">
                  {movie?.vote_average?.toFixed(1)}
                </p>
                <p className="font-medium text-[18px] text-gray-400">/10</p>
              </div>
            </div>
          </div>
          <p>{movie?.overview}</p>
         <div><MovieTrailer movieId={movieId}/></div>
        </div>
    </div>
  );
};
