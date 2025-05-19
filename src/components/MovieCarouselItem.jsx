import { Play, Star } from "lucide-react";

export const MovieCarouselItem = () => {
  return (
    <div>
      <img
        src="./carous.jpg"
        alt="cart"
        className="w-screen min-h-[246px] md:max-h-[600px] md:relative"
      />
      <div className="flex flex-col gap-[16px] m-[20px] md:absolute top-[178px] left-[140px] md:w-[404px] md:text-white">
        <div className="flex w-[335px] h-[52px] justify-between items-center">

          <div>
            <p className="font-normal text-[14px]">Now Playing:</p>
            <p className="font-semibold text-[24px]">Wicked</p>
          </div>

          <div className="flex gap-[4px] items-center">
            <Star className="h-[16px} w-[16px] fill-yellow-300 text-yellow-300" />
            <div className="flex">
              <p className="font-semibold text-[18px] text-[#09090b] md:text-white">6.9</p>
              <p className="font-medium text-[18px] text-gray-400">/10</p>
            </div>
          </div>
          
        </div>

        <p>
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <button className="flex gap-[2px] px-[16px] py-[8px] bg-[#09090b] text-white w-fit rounded-[6px] md:bg-white md:text-[#18181b]"><Play /> Watch Trailer</button>
      </div>
    </div>
  );
};
