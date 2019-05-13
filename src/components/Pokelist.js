import React,{Component} from 'react';

class Pokelist extends React.Component{

render(){
    const {list} = this.props;
    return(list.map(pokemon=> <li><div> <img src={pokemon.url}/><h1>{pokemon.name}</h1><ul>{pokemon.types.map(p=><li>{p}</li>)}</ul></div></li>));
}

}




export default Pokelist; 