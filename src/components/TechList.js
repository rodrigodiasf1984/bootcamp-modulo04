import React, {Component} from 'react';

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
  render(){
    /*as chaves server para inserir codigo js, map serve para percorre o array techs , para cada tech , criar uma nova <li>com o valor dentro do array</li> */
    return(
      // isto é um fragment=> usado quanto tiver mais de uma tag dentro do componente, é preciso de um container <div>
      <form onSubmit={this,this.handleSubmit}>       
        <ul>
        {this.state.techs.map(tech=><li key={tech}>{tech}</li>)} 
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