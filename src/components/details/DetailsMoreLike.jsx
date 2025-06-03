import { ArrowRight } from "lucide-react"
import { MovieCard } from "../MovieCard"
import Link from "next/link"

export const DetailsMoreLike = ({simi, movieId}) => {
    return (
        <div className="pt-8">
            <div className="flex justify-between">
                <b className="font-semibold text-[24px]">More like this</b>
               <Link href={`/moreLike/${movieId}`}> <p className="flex font-medium gap-[8px] items-center">See more <ArrowRight className="w-[16px] h-[16px]"/></p></Link>
            </div>
            <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-8">
                {simi?.slice(0, 5).map((movie,id)=>(
                     <MovieCard key={id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}