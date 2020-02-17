import React, {Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component{
  state = {// estado do component,todo estado é imutável
    newTech:'',
    techs:[]
  };
  //ciclos de vida de um componetes 
  //1=>Executado assim que um componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({techs:JSON.parse(techs)});
    }
  }
  //2=>Executado sempre que houver alterações nas props ou estado 
  componentDidUpdate(_, prevState){
    // caso seja alterado as propriedades ou o stade de um componente
    //podemos verificar se os parâmetros foram alterados com o this.props, this.state
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }
  //Executado quando o componente deixa de existir
  componentWillUnmount(){
    // limpa qualquer tipo de sujeira que o componente possa ter deixado na app
  }

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