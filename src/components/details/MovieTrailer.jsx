import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import YouTube from "react-youtube";

export const MovieTrailer = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button><Play/>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit ">
        <YouTube/>
      </DialogContent>
    </Dialog>
  );
};
