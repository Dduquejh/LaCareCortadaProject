import { Link } from "react-router-dom";

interface ModelItemProps {
    id: number;
    image: string;
    name: string;
}

export const ModelItem = ({list} : {list: ModelItemProps[]}) => {
    return(
        <>
            {list.map((model) => (
                <div key={model.id} className="bg-gray-100 w-1/4 m-2 p-2">
                    <Link to={`/Model/${model.id}`}>
                        <img src={model.image} alt={model.name} className="w-full"/>
                        <h3>{model.name}</h3>
                    </Link>
                </div>
            ))}
    </>
    )
}