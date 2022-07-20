import { useState, useEffect } from 'react';
import NextButton from "./NextButton";


function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [findCharacters, setFindCharacters] = useState('');

  useEffect(() => {

    async function getData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`);
      const data = await response.json();
      setCharacters(data.results);
    }
    getData();

  }, [pagination]);

  function toggleChange(e) {
    setFindCharacters(e.target.value);
  }

  return (
    <>
      <NextButton pagination={pagination} setPagination={setPagination} />
      
      <div className='d-flex justify-content-center my-5'>
        <select onChange={toggleChange}>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
        </select>
        <input type="text" onChange={toggleChange} />
      </div>
      {
        characters.filter(character => character.name.includes(findCharacters) || character.species.includes(findCharacters))
          .map((character) => {
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