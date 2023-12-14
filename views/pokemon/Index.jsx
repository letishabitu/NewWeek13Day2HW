const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1> Pokemon Index Page</h1>
                <nav>
                    <a href="/pokemons/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {pokemons.map((pokemon, i) => {
                        return (
                            <li>
                                Pokemon {' '} 
                                {pokemon.name} <br></br>
                                <a href={`/pokemons/${i}`}>
                                    click here for the image
                                </a> {' '}
                                
                                
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;