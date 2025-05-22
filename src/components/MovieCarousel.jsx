import { Card, CardContent } from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import { MovieCarouselItem } from "./MovieCarouselItem";
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "@/lib/api/getNowPlayingMovies";


export const MovieCarousel = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  useEffect(()=>{
    const fetchMovies = async ()=>{
      const movies = await getNowPlayingMovies();
      setNowPlayingMovie(movies);
    };
    fetchMovies()
  }, []);
  return (
    <div>
      <Carousel 
        className="relative"  
        plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      >
        <CarouselContent>
          {nowPlayingMovie?.slice(0, 5).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCarouselItem 
                  movie={movie}
                  movieId={movie.id}
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
