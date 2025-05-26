import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useEffect, useState } from "react";
import { getMovieTrailer } from "@/lib/api/api/getMovieTrailer";
import YouTube from "react-youtube";

export const MovieTrailer = ({movieId}) => {
  const [trailer, setTrailer] = useState([])

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data.results);
        // console.log("fff",data)
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    }
    getMovieTrailerById();
  }, [movieId]);
  const MovieTrailer = trailer.find(
    (video)=> video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="secondary"><Play/>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit bg-transparent border-none">
        <YouTube
        videoId={MovieTrailer?.key}
        opts = {{
          height: '770',
          width: '1400',
          playerVars: {
          autoplay: 1,
          }
        }}/>
      </DialogContent>
    </Dialog>
  );
};
