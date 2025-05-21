import { Star } from "lucide-react"

export const MovieCard = () => {
    return(
        <div className="w-full rounded-[8px] bg-gray-50">
            <img src="./cart.jpg" alt="movieCart" className="w-full"/>
            <div className="p-[8px]">
                <div className="flex gap-[4px]">
                    <Star className="h-[16px} w-[16px] fill-yellow-300 text-yellow-300"/>
                    <div className="flex">
                        <p className="font-medium text-[#09090b]">6.9</p>
                        <p className="font-medium text-[#71717a]">/10</p>
                    </div>
                </div>
                <p className="font-medium h-[40px] text-[#09090b]">Dear Santa</p>
            </div>
        </div>
    )
}