import { ArrowRight } from "lucide-react"
import { MovieCard } from "./MovieCard"

export const Popular = () => {
    return(
        <div className="flex flex-col p-[20px] gap-[32px]">
            <div className="flex justify-between">
                <b>Popular</b>
                <p className="flex font-medium gap-[8px] items-center">See more <ArrowRight className="w-[16px] h-[16px]"/></p>
            </div>
            <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {Array.from({length: 10}).map((_, index) => (
                    <MovieCard/>
                ))}
            </div>
        </div>
    )
}