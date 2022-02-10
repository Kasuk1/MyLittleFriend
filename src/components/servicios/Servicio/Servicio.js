import './Servicio.css';


export const Servicio = ({ _id, image, name, detail, img_url, price, veterinary }) => {

    return (
        <div className="service-card">
            <img
                className='service-card__image'
                src={img_url ? img_url : 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                alt=''
            />
            <div className='service-card__info'>
                <h4 className='service-card__name heading--3 color-primary'>{name}</h4>
                <span className='service-card__veterinary'>{veterinary}</span>
                <p className='service-card__detail paragraph'>{detail}</p>
                <span className='service-card__price'>{price} COP</span>
            </div>
        </div>
    )
}