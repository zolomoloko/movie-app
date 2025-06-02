import { CategoryFrame } from "@/components/Pages";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { getCategory } from "@/lib/categore/getCategory";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parseAsInteger, useQueryState } from "nuqs";

const Page = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;
  const [movieCategory, setMovieCategory] = useState({});
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    if (!categoryName) return;
    const getMovieCategory = async () => {
      const data = await getCategory(categoryName, page);

      setMovieCategory(data);
    };
    getMovieCategory();
  }, [categoryName, page]);

  return (
    <div>
      <Header />

      <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:max-w-[1800px] mx-auto pt-[52px]">
        {movieCategory.results?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>

      <CategoryFrame
        page={page}
        setPage={setPage}
        movieCategory={movieCategory}
      />
      <Footer />
    </div>
  );
};
export default Page;
