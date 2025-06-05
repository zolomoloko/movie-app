import { Blur } from "transitions-kit";
import { AsyncImage } from "loadable-image";

export const CarouselImage = ({ src }) => {
  // const [status, setStatus] = useState("loading");

  return (
    <AsyncImage
      src={src}
      className="w-screen min-h-[246px] lg:h-[900px]"
      Transition={Blur}
    />
  );
};
