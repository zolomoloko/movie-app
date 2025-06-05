import { ArrowRight } from "lucide-react"
import { MovieCard } from "./MovieCard"
import { getTopMovies } from "@/lib/api/getTopMovies";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MoviePosterLoading } from "./loading/MoviePosterLoading";

export const TopRated = () => {
    const [upTopMovies, setUpTopMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        const top = async () => {
            const upTopMovies = await getTopMovies();
            const firstTenMovies = upTopMovies.results?.slice(0, 10)
            setUpTopMovies(firstTenMovies);
        };
        top();
        setLoading(false)
    }, [])
    return(
        <div className="flex flex-col p-[20px] gap-[32px] w-screen md:max-w-[1800px] mx-auto">
            <div className="flex justify-between">
                <b className="font-semibold text-[24px]">Top Rated</b>
                <Link href={`category/top_rated`}>
                  <p className="flex font-medium gap-[8px] items-center">See more <ArrowRight className="w-[16px] h-[16px]"/></p>
                </Link>
            </div>
            <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {loading && <MoviePosterLoading/>}
                {upTopMovies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}