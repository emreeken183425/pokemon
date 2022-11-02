import React from 'react'

const Card = ({pokemonData} ) => {
console.log(pokemonData);
//  const name = pokemonData.name[0]
//     const id = pokemonData.id.toString().padStart(3, "0")
//     const weight = pokemonData.weight;
    

const {name,id,weight}=pokemonData
  return (
    
    <div>
     <h3>{name } </h3>
     <h3>{ weight} </h3>
     
   


    </div>
  )
}

export default Card
