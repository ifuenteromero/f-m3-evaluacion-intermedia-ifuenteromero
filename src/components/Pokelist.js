import React,{Component} from 'react';
import Pokemon from './Pokemon';
class Pokelist extends React.Component{

render(){
    const {list} = this.props;
    return(list.map(pokemon=> <Pokemon pokemon = {pokemon} />));
}

}




export default Pokelist; 