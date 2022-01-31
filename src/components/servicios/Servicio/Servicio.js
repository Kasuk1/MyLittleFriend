import './Servicio.css';


export const Servicio = ({ id, image, name, description }) => {

    return (
        <div className="service-card">
            <img className='service-card__image' src={image} alt='' />
            <div className='service-card__info'>
                <h3 className='service-card__name heading--3 color-primary'>{name}</h3>
                <p className='paragraph'>{description}</p>
            </div>
        </div>
    )
}