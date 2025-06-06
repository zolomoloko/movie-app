import { Blur } from "transitions-kit";
import { AsyncImage } from "loadable-image";

export const Image = ({ src }) => {
  // const [status, setStatus] = useState("loading");

  return (
    <AsyncImage
      src={src}
<<<<<<< HEAD
      style={{ width: "100%", height: "auto", aspectRatio: 3 / 4 }}
=======
      style={{width: "100%", hieight: "auto", aspectRatio: 3/ 4}}
>>>>>>> origin/main
      Transition={Blur}
    />
  );
};
