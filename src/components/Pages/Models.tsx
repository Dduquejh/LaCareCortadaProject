import { models } from "../../constants";
import { ModelItem } from "../Model/ModelItem";

const Models = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-4">Models</h1>
            <ModelItem list={models}></ModelItem>
        </div>
    )
}

export default Models;