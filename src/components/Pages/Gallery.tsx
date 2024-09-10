import { CardSlider } from "../CardSlider";
import { gallery } from "../../constants";

export const Gallery = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Gallery
      </h1>
      <CardSlider list={gallery} contentType={"media"} />
    </div>
  );
};
