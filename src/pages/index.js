import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { UpComing } from "@/components/UpComing";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1440px] m-auto">
        <div className="w-screen md:max-w-[1280px] mx-auto">
          <Header />
        </div>
        <MovieCarousel />
        <div className="w-screen md:max-w-[1280px] mx-auto">
          <UpComing/>
          <Popular/>
          <TopRated/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
