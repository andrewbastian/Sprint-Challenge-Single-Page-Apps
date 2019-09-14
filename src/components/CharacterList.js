import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] =useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rick-api.herokuapp.com/api/character/?page=${page}`)
          .then(res =>{
            console.log(res.data.info.page);
            setCharacters(res.data.results);
          })
          .catch(error => console.log(error))
  }, [page]);

  return (
    <section className="character-list grid-view">
      <h2>{characters.map(character =>{
          return <CharacterCard key={character.id} character={character}/>
        })}
      </h2>
    </section>
  );
}
