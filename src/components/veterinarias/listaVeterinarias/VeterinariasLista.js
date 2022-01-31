import { veterinarias } from "../../../util/data/veterinarias";
import './VeterinariasLista.css';
import { Veterinaria } from "../veterinaria/Veterinaria";

export const VeterinariasLista = () => {

  return (
    <div className='section__veterinaries--container'>
      <section className='section__veterinaries'>
        <div className='section__veterinaries--headers'>
          <div>
            <h2 className='heading--1 color-tertiary'>Veterinarias</h2>
            <div className="horizonal-line mb-2">
              <i className="fas fa-bone horizontal-line--icon"></i>
            </div>
          </div>

          <p className='paragraph color-paragraph'>
            La lista debajo contiene todos las veterinarias registradas y vigentes
            que ofrecen diversa cantidad de servicios, !Averigua cual te conviene¡.
          </p>
        </div>

        <div className='section__veterinaries--list'>
          {veterinarias.map((veterinaria) => <Veterinaria key={veterinaria.id} {...veterinaria} />)}
        </div>
      </section>
    </div>
  );
};
