import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card'

function App() {
 const [pokemonData, setPokemonData] = useState([])



 const initPokemon = async () => {
  const pokeCount = 15;
  for (let i=1; i<= pokeCount; i++){
      await getPokemon(i)
  }
}
  const getPokemon = async() => {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    let res = await fetch(url)
    let data = await res.json()
    setPokemonData(data)
  
}
useEffect(() => {
  getPokemon()
initPokemon()
  
}, [])
console.log(pokemonData);


  return (
    <div className="app">
     <form>

      <input type="text"  />
      <button>
        Search
      </button>
     </form>

<Card pokemonData={pokemonData}   />

    </div>
  );
}

export default App;
