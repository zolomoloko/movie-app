import { Play, Star } from "lucide-react";
import { Button } from "./ui/button";

export const DetailsHeader = () => {
  return (
    <div className="md:max-w-[1080px] mx-auto bg-red-300">
        <div className="flex justify-between ">
            <div>
                <h1 className="font-semibold text-[24px] md:text-[36px]">Wicked</h1>
                <h2 className="font-normal text-[14px] md:text-[18px]">2024.11.26 · PG · 2h 40m</h2>
            </div>

            <div>
              <p className="font-medium text-[12px] hidden md:flex">Rating</p>
              <div className="flex gap-1 items-center">
                <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
                <div>
                    <div className="flex font-normal text-[14px]">
                        <p className="text-[#09090b]">6.9</p>
                        <p className="text-[#71717a]">/10</p>
                    </div>
                    <p className="font-normal text-[12px] text-[#71717a]">37k</p>
                </div>
              </div>
            </div>
        </div>
                    
        <div className="flex  relative ">
          <img src="../bla.jpg" alt="cart"className="hidden md:flex w-1/3 h-[428px]"/>
          <img src="../carous.jpg" className="md:w-2/3"/>
              <div className="absolute flex items-center gap-3 top-[75%] left-[10%] md:top-[80%] md:left-[38%]">
                <Button variant="secondary" className="rounded-[50px]"><Play/></Button>
                <p className="font-normal text-[16px] text-white">Play trailer</p>
                <p className="font-normal text-[16px] text-white">2:35</p>
              </div>
          
        </div>
    </div>
  );
};
