import { Blur } from "transitions-kit";
import { AsyncImage } from "loadable-image";

export const Image = ({ src }) => {
  // const [status, setStatus] = useState("loading");

  return (
    <AsyncImage
      src={src}
      className="w-100%  min-h-[250px] md:h-[540px]"
      Transition={Blur}
    />
  );
};
