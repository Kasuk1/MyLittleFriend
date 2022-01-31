import { useNavigate } from 'react-router-dom';
import './Mascota.css';

export const Mascota = ({ id, name, description, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pet/${id}`)
    }

    return (
        <div
            className='pet-card'
            onClick={handleClick}
        >
            <img className='pet-card__image' src={image} alt='' />
            <div className='pet-card__info'>
                <h3 className='pet-card__name heading--3 color-primary'>{name}</h3>
                <p className='pet-card__description paragraph'>{description}</p>
            </div>
        </div>


    );
}
