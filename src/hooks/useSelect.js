import React, { useState } from 'react';
const useSelect = (stateInicial, opciones) => {
  // satate del custom hook
  const [state, acutualizarState] = useState(stateInicial);
  const SelectNoticias = () => (
    <select
      className='browser-default'
      value={state}
      onChange={(e) => acutualizarState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option value={opcion.value}>{opcion.label}</option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
