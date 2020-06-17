import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    {
      value: 'general',
      label: 'General',
    },
    {
      value: 'bussines',
      label: 'Negocios',
    },
    {
      value: 'entertainment',
      label: 'Entretenimiento',
    },
    {
      value: 'health',
      label: 'Salud',
    },
    {
      value: 'science',
      label: 'Ciencia',
    },
    {
      value: 'sport',
      label: 'Deporte',
    },
    {
      value: 'technology',
      label: 'Tecnologia',
    },
  ];
  // utilizar custom hooks
  const [categoria, SelecNoticias] = useSelect('general', OPCIONES);

  // submit al form, pasar categoria a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
          <SelecNoticias />
          <div className='input-field col s12'></div>
          <input
            type='submit'
            className={`${styles['btn-block']} btn-large amber darken-2`}
            value='Buscar'
          />
        </form>
      </div>
    </div>
  );
};

export default Formulario;
