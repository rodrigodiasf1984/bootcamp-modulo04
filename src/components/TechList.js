import React, {Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component{
  state = {// estado do component,todo estado é imutável
    newTech:'',
    techs:[
      'Node.js',
      'React JS',
      'React Native'
    ]
  };

  handleInputChange = e=>{ //arrow function para poder acessar as outras propriedades da classe
    this.setState({newTech:e.target.value});
    
  }

  handleSubmit = e=>{
    e.preventDefault();// evita que a pagina seja recarregada
    this.setState({
      techs:[...this.state.techs, this.state.newTech],
      newTech:'' // limpa o input após inserção
    });
  }
  handleDelete = (tech)=>{
    this.setState({techs:this.state.techs.filter(t=>t!==tech)})
  }
  
  render(){
    /*as chaves server para inserir codigo js, map serve para percorre o array techs , para cada tech , criar uma nova <li>com o valor dentro do array</li> */
    return(
      // isto é um fragment=> usado quanto tiver mais de uma tag dentro do componente, é preciso de um container <div>
      <form onSubmit={this,this.handleSubmit}>       
        <ul>
          {/*o tech em verde e i onDelete são propriedades que são passadas para o componente, essa propriedade é uma função  */}
        {this.state.techs.map(tech=> (
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={()=>this.handleDelete(tech)}
          />          
        ))} 
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default TechList;