import React from 'react';

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

export default TechItem;