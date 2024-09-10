import { useParams } from "react-router-dom";
import { models } from "../../constants";
import { CardSlider } from "../CardSlider";

const ViewModel = () => {
  const { modelID } = useParams<{ modelID: string }>();
  if (!modelID) return "Model not found";

  const model = models.find((model) => model.id === +modelID);
  if (!model) return "Model not found";

  return (
    <div className="flex justify-center p-2 mx-auto">
      <div className="max-w-4xl w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl text-center mb-8 font-bold">
          {model.name}
        </h1>
        <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 mb-8">
          <img
            src={model.image}
            alt={model.name}
            className="w-[90%] mobile:w-full tablet:w-[80%] h-auto object-cover rounded-lg mx-auto"
          />
          <div className="flex-1 flex flex-col text-center md:text-left">
            <p className="text-white mb-4">{model.description}</p>
          </div>
        </div>
        <a
          href={model.portfolio}
          target="_blank"
          className="text-white bg-sky-950 p-2 rounded-lg items-center justify-center flex w-full hover:bg-sky-800"
        >
          Portafolio
        </a>
        <div className="flex justify-center mt-8">
          <CardSlider
            list={model.imgs.map((img, index) => ({ image: img, id: index }))}
            showName={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewModel;
