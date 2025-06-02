import { Blur } from "transitions-kit";
import { AsyncImage } from "loadable-image";

export const Image = ({ src }) => {
  // const [status, setStatus] = useState("loading");

  return (
    <AsyncImage
      src={src}
      style={{ width: "100%", height: 540 }}
      Transition={Blur}
    />
  );
};
