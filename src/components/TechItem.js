import React from 'react';
import PropTypes from 'prop-types';
// como esse componente não têm state podemos utilizar como função
//Recebe a tecnologia e a função como parâmentro
function TechItem({tech, onDelete}){
  return(
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}
// Caso este componente seja utilizado sem os as propriedades  , o mesmo usa as defaultProps
TechItem.defaultProps = {
  tech:'Oculto',
}

//valida as propriedades do componente
TechItem.PropTypes={
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}
export default TechItem;