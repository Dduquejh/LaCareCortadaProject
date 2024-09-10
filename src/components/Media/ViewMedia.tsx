import { useParams } from "react-router-dom";

import { gallery } from "../../constants";

const ViewMedia = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return "Media not found";

  const media = gallery.find((media) => media.id === +id);
  if (!media) return "Media not found";
  return (
    <div className="flex justify-center p-2 mx-auto">
      <div className="max-w-4xl w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          {media.name}
        </h1>
        <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 mb-8">
          <img
            src={media.image}
            alt={media.name}
            className="blur-md w-full h-auto object-cover rounded-lg mx-auto"
          />
          <div className="flex-1 flex flex-col text-center md:text-left">
            <p className="text-white mt-8 text-xl">{media.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMedia;
