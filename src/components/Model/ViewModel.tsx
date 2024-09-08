import { useParams } from "react-router-dom";
import { models } from "../../constants";
import { CardSlider } from "../CardSlider";

const ViewModel = () => {
    const { modelID } = useParams<{modelID: string}>();
    console.log(modelID);
    if (!modelID) return "Model not found";

    const model = models.find((model) => model.id === +modelID);
    if (!model) return "Model not found";
    return (
        <div>
            <h1 className="text-white text-lg">{model.name}</h1>
            <img src={model.image} alt={model.name}/>
            <p className="text-white">{model.description}</p>
            <a className="text-white">{model.portfolio}</a>
            <CardSlider list={model.imgs.map((img) => ({image:img}))} showName={false}/>
            <br></br>
        </div>
    )
}

export default ViewModel;