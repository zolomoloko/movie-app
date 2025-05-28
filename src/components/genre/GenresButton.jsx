import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getGenre } from "@/lib/genreFilter/getGenre";

export const GenresButton = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const getGenres = async () => {
      const movies = await getGenre();
      const allGenre = movies.genres;
      setGenres(allGenre);
    };
    getGenres();
  }, []);
  return (
    <div>
      <DropdownMenuLabel className="font-bold text-[24px]">
        Genres
      </DropdownMenuLabel>
      <DropdownMenuLabel className="pb-5">
        See lists of movies by genre
      </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <div className="flex gap-3 flex-wrap font-bold pt-5">
        {genres?.map((movie) => (
          <Link href={`genre/${movie.id}`}>
            <Button
              movie={movie}
              variant="secondary"
              className="border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex bg-white font-bold"
            >
              {movie.name} <ChevronRight />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
