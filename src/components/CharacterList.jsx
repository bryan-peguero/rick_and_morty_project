import { useState, useEffect } from 'react';
import NextButton from "./NextButton";


function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {

    async function getData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`);
      const data = await response.json();
      setCharacters(data.results);
    }
    getData();
  
  }, [pagination]);

  return (
    <>
      <NextButton pagination={pagination} setPagination={setPagination} />
      {
        characters.map((character) => {
          return (
            <div className="col-md-4 text-center text-white my-4" key={character.id}>
              <ul>
                <li key={character.name} className="list-group-item">
                  <h5>{character.name}</h5>
                  <img className='img-fluid rounded-circle' src={character.image} alt={character.name} />
                  <p>Specie: {character.species} <br /><em>Origin: {character.origin.name}</em></p>
                </li>
              </ul>
            </div>
          )
        }
        )
      }
      <NextButton pagination={pagination} setPagination={setPagination} />
    </>
  )
}

export default CharacterList;