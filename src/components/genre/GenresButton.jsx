import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import { getGenre } from "@/lib/genreFilter/getGenre";
import { useRouter } from "next/router";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";

export const GenresButton = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  useEffect(() => {
    const getGenres = async () => {
      const moviesZ = await getGenre();
      setGenres(moviesZ.genres);
    };
    getGenres();
  }, []);

  // toggle hiih function
  const handleSelectGenre = (id) => {
    const newGenreIds = genreIds.includes(id)
      ? genreIds.filter((genreId) => genreId !== id)
      : [...genreIds, id];
    setGenreIds(newGenreIds);

    router.push({
      pathname: "/genrePage",
      query: { genreIds: newGenreIds.join(",") },
    });
    // router.push(`/genres?genreIds=${newGenreIds}`);
  };

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
        {genres?.map((genre) => {
          const isSlected = genreIds.includes(genre.id);
          return (
            <Button
              key={genre.id}
              variant={isSlected ? "default" : "secondary"}
              className=" border-none rounded-full px-[10px] py-[2px] flex font-bold"
              onClick={() => handleSelectGenre(genre.id)}
            >
              {genre.name}
              <ChevronRight />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
