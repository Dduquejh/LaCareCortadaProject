import { CardSlider } from "../CardSlider";
import { gallery } from "../../constants";

export const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-4/5 mx-auto my-10 flex-grow">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Gallery
        </h1>
        <CardSlider list={gallery} contentType={"media"} />
      </main>
    </div>
  );
};
