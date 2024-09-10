import { models } from "../../constants";
import { ModelItem } from "../Model/ModelItem";

const Models = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">Models</h1>
      <ModelItem list={models}></ModelItem>
    </div>
  );
};

export default Models;
