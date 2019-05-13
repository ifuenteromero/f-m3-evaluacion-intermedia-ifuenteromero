import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <li>
                <div>
                    <img src={pokemon.url} />
                    <h1>{pokemon.name}</h1>
                    <ul>{pokemon.types.map(type =>
                         <li>{type}</li>)}</ul>
                </div>
            </li>
        );
    }


}



export default Pokemon;