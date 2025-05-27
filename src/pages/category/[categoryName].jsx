import { CategoryFrame } from "@/components/CategoryFrame";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { getCategory } from "@/lib/categore/getCategory";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;
  const [movieCategory, setMovieCategory] = useState([]);
  console.log("0000", movieCategory);
  useEffect(() => {
    if (!categoryName) return;
    const getMovieCategory = async () => {
      const data = await getCategory(categoryName);

      setMovieCategory(data);
    };
    getMovieCategory();
  }, [categoryName]);


  return (
    <div>
      <Header />

      <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:max-w-[1800px] mx-auto pt-[52px]">
        {movieCategory?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>

      <CategoryFrame/>
      <Footer/>
    </div>
  );
};
export default Page;
