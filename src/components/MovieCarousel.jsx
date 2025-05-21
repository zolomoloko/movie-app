import { Card, CardContent } from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import { MovieCarouselItem } from "./MovieCarouselItem";
import Autoplay from "embla-carousel-autoplay"
import { Slice } from "lucide-react";

export const MovieCarousel = ({nowPlayingMovie}) => {
  console.log("::::::",nowPlayingMovie)
  return (
    <div>
      <Carousel 
        className="relative"  
        plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      >
        <CarouselContent>
          {nowPlayingMovie?.slice(0, 5).map((kino, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCarouselItem 
                  title={kino.title}
                  overview={kino.overview}
                  vote_average={kino.vote_average}
                  backdrop_path={kino.backdrop_path}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible md:visible absolute left-10 to-50%"/>
        <CarouselNext className="invisible md:visible absolute right-10 to-50%"/>
      </Carousel>
    </div>
  );
};
