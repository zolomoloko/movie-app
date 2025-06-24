import { getMovieTrailer } from "@/lib/api/api/getMovieTrailer";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);

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
    };
    getMovieTrailerById();
  }, [movieId]);
  const MovieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger className="bg-white rounded-[8px]">
        <DialogTitle className="flex p-1.5 items-center text-black gap-1 text-[15px] font-normal">
          <Play />
          Watch Trailer
        </DialogTitle>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none p-0 w-full max-w-[1600px] max-h-[1000px] aspect-video rounded-lg text-white">
        <YouTube
          videoId={MovieTrailer?.key}
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
