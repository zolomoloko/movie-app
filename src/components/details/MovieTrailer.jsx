import { getMovieTrailer } from "@/lib/api/api/getMovieTrailer";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

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
      <DialogTrigger className="flex bg-white rounded-[8px] p-1.5">
        <DialogTitle></DialogTitle>
        <Play />
        Watch Trailer
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit bg-transparent border-none">
        <YouTube
          videoId={MovieTrailer?.key}
          opts={{
            height: "200",
            width: "400",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
