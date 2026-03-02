import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className="text-3xl text-justify tracking-widest leading-normal">
            {starWarsInfo}
        </div>
    )
}

export default StarWars;