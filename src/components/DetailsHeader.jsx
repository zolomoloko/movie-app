import { Play, Star } from "lucide-react";
import { Button } from "./ui/button";

export const DetailsHeader = () => {
  return (
    <div>
        <div className="flex p-5 justify-between">
            <div>
                <h1 className="font-semibold text-[24px]">Wicked</h1>
                <h2 className="font-normal text-[14px]">2024.11.26 · PG · 2h 40m</h2>
            </div>

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
                    
        <div>
          <img src="../carous.jpg"  className="relative"/>
          <div>
            <Button><Play/></Button>
          </div>
        </div>
    </div>
  );
};
