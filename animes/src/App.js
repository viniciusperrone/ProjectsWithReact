import React, { useState, useEffect } from 'react';

import InputSearch from './InputSearch';

const api = 'https://kitsu.io/api/edge/';
const App = () => {

  const [info, setInfo] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    if(name){
      fetch(`${api}anime?filter[text]=${name}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
        
      })
    }
  }, [name]);
  return (
    <div className="App">
      <h1>Animes {name}</h1>
      <InputSearch value={name} onChange={(search) => setName(search)} />
      {
        info.data && (
          <ul>
            {info.data.map((anime) =>  {
              <li key={anime.id}>{anime.attributes.canonicalTitle}</li>
            })}
          </ul>
        )
      }
    </div>
  );
}

export default App;
