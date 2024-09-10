import { Link } from "react-router-dom";

interface ModelItemProps {
  id: number;
  image: string;
  name: string;
}

export const ModelItem = ({ list }: { list: ModelItemProps[] }) => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((model) => (
        <div
          key={model.id}
          className="bg-sky-950 sm:w-1/2 md:w-[100%] m-4 p-4 shadow-lg rounded-2xl"
        >
          <Link to={`/Model/${model.id}`}>
            <img
              src={model.image}
              alt={model.name}
              className="w-full rounded-lg"
            />
            <p className="text-2xl font-bold my-2 text-white text-center">
              {model.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
