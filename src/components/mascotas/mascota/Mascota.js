import { useNavigate } from 'react-router-dom';
import './Mascota.css';

export const Mascota = ({ _id, name, detail, avatar_url, birthdate, type, owner }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pet/${_id}`)
    }

    return (
        <div
            className='pet-card'
            onClick={handleClick}
        >
            <img
                className='pet-card__image'
                src={avatar_url ? avatar_url : 'https://images.unsplash.com/photo-1488290518759-5747f87b653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                alt=''
            />
            <div className='pet-card__info'>
                <h3 className='pet-card__name heading--3 color-primary'>{name}</h3>
                <p className='pet-card__description paragraph'>{detail}</p>
            </div>
        </div>
    );
}
