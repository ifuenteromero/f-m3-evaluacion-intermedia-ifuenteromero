import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <li className="pokemon__container">
                
                    <img src={pokemon.url} alt={pokemon.name} />
                    <h1>{pokemon.name}</h1>
                    <ul>{pokemon.types.map((type,index) =>
                         <li key={index}>{type}</li>)}</ul>
               
            </li>
        );
    }


}



export default Pokemon;