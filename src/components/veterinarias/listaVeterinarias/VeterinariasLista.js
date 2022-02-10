import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Veterinaria } from "../veterinaria/Veterinaria";

import { getVeterinaries, selectGetVeterinariesState, selectVeterinaries } from '../../../store/veterinarySlice/veterinary.slice';
import './VeterinariasLista.css';
import { CardListLoading } from '../../loading/CardListLoading/CardListLoading';

export const VeterinariasLista = () => {
  const dispatch = useDispatch();
  const veterinaries = useSelector(selectVeterinaries);
  const { loading, message } = useSelector(selectGetVeterinariesState);

  useEffect(() => {
    dispatch(getVeterinaries());
  }, [dispatch]);

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
        {
          loading ?
            (
              <CardListLoading />
            )
            :
            veterinaries &&
            (
              <div className='section__pets--list'>
                {message && <p>{message}</p>}
                {veterinaries?.map((veterinary) => (
                  <Veterinaria key={veterinary._id} {...veterinary} />)
                )}
                {!veterinaries.length && (
                  <h2 className='paragraph color-paragraph opacity-50'>
                    Aún no hay veterinarias registradas 🙄.
                    Trataremos de revertir esto lo mas pronto posible 😁.
                  </h2>
                )}
              </div>
            )
        }
      </section>
    </div>
  );
};
