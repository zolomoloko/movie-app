import { ArrowRight } from "lucide-react"
import { MovieCard } from "./MovieCard"

export const DetailsMoreLike = () => {
    
    return (
        <div>
            <div className="flex justify-between">
                <b className="font-semibold text-[24px]">More like this</b>
                <p className="flex font-medium gap-[8px] items-center">See more <ArrowRight className="w-[16px] h-[16px]"/></p>
            </div>
            <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <MovieCard/>
            </div>
        </div>
    )
}