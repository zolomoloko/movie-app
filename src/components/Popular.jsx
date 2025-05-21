import { ArrowRight } from "lucide-react"
import { MovieCard } from "./MovieCard"
import { useEffect, useState } from "react"
import { getPopularMovies } from "@/lib/api/get-popular";


export const Popular = () => {

    const [upPopularMovies, setUpPopularMovies] = useState([]);

    useEffect(() => {
        const popMovies = async () => {
            const upPopularMovies = await getPopularMovies();
            setUpPopularMovies(upPopularMovies)
            console.log("ppp",upPopularMovies)
        };
        popMovies();
    }, [])
    return(
        <div className="flex flex-col p-[20px] gap-[32px] w-screen md:max-w-[1800px] mx-auto">
            <div className="flex justify-between">
                <b>Popular</b>
                <p className="flex font-medium gap-[8px] items-center">See more <ArrowRight className="w-[16px] h-[16px]"/></p>
            </div>
            <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {upPopularMovies?.slice(0, 10).map((movie,id) => (
                    <MovieCard key={id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}