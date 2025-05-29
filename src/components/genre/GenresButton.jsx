import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getGenre } from "@/lib/genreFilter/getGenre";
import { useRouter } from "next/router";

export const GenresButton = () => {
  const router = useRouter();
  const genreId = router.query.genreFilter;
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const movies = await getGenre();
      const allGenre = movies.genres;
      setGenres(allGenre);
    };
    getGenres();
  }, []);
  const handleSelectGenre = (id, name) => {
    setGenreIds([...genreIds, name]);

    //  router.push(`/genres?genreIds=${genreIds}&name=${name}`);
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
        {genres?.map((genre) => (
          <Link href={`/genreFilter/${genre.id}`}>
            <Button
              movie={genre}
              variant={String(genre.id) === genreId ? "default" : "secondary"}
              className="border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex font-bold"
              onClick={() => handleSelectGenre(genre.id, genre.name)}
            >
              {genre.name} <ChevronRight />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
