import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { getUpComingMovies } from "@/lib/api/getuUpComingMovie";
import { useEffect, useState } from "react";
import Link from "next/link";

export const UpComing = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upComingMovies = await getUpComingMovies();
      setUpComingMovies(upComingMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col p-[20px] gap-[32px] w-screen md:max-w-[1800px] mx-auto">
      <div className="flex justify-between">
        <b className="font-semibold text-[24px]">Upcoming</b>
        <Link href={`/category/upcoming`}>
          <p className="flex font-medium gap-[8px] items-center">
            See more <ArrowRight className="w-[16px] h-[16px]" />
          </p>
        </Link>
      </div>
      <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {upComingMovies?.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
