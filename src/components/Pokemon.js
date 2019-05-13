import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <li className="pokemon__container">
                
                    <img src={pokemon.url} alt={pokemon.name} />
                    <h2 className="pokemon__title">{pokemon.name}</h2>
                    <ul className="types">{pokemon.types.map((type,index) =>
                         <li key={index} className="badge badge-secondary ">{type}</li>)}</ul>
               
            </li>
        );
    }


}



export default Pokemon;