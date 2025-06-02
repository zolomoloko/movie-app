import { Footer } from "@/components/Footer";
import { GenresButton } from "@/components/genre/GenresButton";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getGenreFilter } from "@/lib/genreFilter/getGerneFilter";
import { useRouter } from "next/router";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const GenrePage = () => {

  const router = useRouter();
  const genreId = router.query.genreIds
  console.log("",genreId)
  const [movieFilter, setmovieFilter] = useState({});

  useEffect(() => {
    if (!genreId) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreId);

      setmovieFilter(data);
    };
    getFilter();
  }, [genreId]);

  if (!movieFilter || !movieFilter.results) return null;
  const resultMovie = movieFilter.results;

  return (
    <div>
      <Header />
      <div className="w-screen md:max-w-[1800px] mx-auto pt-[52px]">
        <p className="font-semibold text-[30px]">Search filter</p>
        <div className="flex  pt-8 gap-10 ">
          <div className="w-[385px]">
            <GenresButton />
          </div>
          <div className="p-5">
            <p>81 title in ""</p>
            <div className="grid  gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {resultMovie?.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GenrePage;
