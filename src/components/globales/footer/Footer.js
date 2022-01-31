import './Footer.css';

export const FooterComponent = () => {
    return (
        <div className="footer">
            <i className="fas fa-paw footer__logo"><span>MyLittleFriend</span></i>
            <p className="footer__copyright paragraph">
                &copy;Proyecto realizado por el
                <span className="footer__span"> Grupo 1</span> del TOP 19 de
                <a
                    className="footer__link"
                    href='https://makeitreal.camp/'
                    target='_blank'
                    rel='noreferrer'>
                    MakeItReal
                </a>.
            </p>
        </div>
    );
};