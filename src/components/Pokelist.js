import React from 'react';
import Pokemon from './Pokemon';
class Pokelist extends React.Component{

render(){
    const {list} = this.props;
    return(list.map((pokemon,index)=> <Pokemon pokemon = {pokemon} key={index}/>));
}

}




export default Pokelist; 