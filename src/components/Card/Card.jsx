import { Link } from "react-router-dom";

import './Card.scss';

const Card = ({ name, image, species, id }) => {
    return (
        <div className="card-container">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="description">
                <Link to={`/${id}`}>{name || 'No name'}</Link>
                <span>{species || 'unknown'}</span>
            </div>
        </div>
    );
}

export default Card;