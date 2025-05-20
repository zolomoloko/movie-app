import { ArrowRight } from "lucide-react"
import { MovieCard } from "./MovieCard"

export const TopRated = () => {
    return(
        <div className="flex flex-col p-[20px] gap-[32px]">
            <div className="flex justify-between">
                <b>Top Rated</b>
                <p className="flex">See more <ArrowRight/></p>
            </div>
            <div className="grid  gap-[20px] grid-cols-2 md:grid-cols-5">
                {Array.from({length: 10}).map((_, index) => (
                    <MovieCard/>
                ))}
            </div>
        </div>
    )
}