import React, { useState, useEffect } from 'react'

import './App.css';

// O useEffect é o mesmo método para componentDidMount, componentDidUpdate, componentUnMount
// Ele recebe dois principais parâmetros, o primeiro é uma função e o segundo é em quais circunstâncias esta função deve ser executada

export default function App () {
  const [repositories, setRepositories] = useState([]);
  const [countRepositories, setCountRepositories] = useState(0);

  useEffect(() => {
    async function getRepositories(){
      const response = await fetch('https://api.github.com/users/viniciusperrone/repos');
      const data = await response.json();
      
      setRepositories(data);
    }

    getRepositories();
  }, [])  

  useEffect(() => {
    
    const countFavorites =  repositories.filter(repo => repo.favorite)

    setCountRepositories(countFavorites.length);
    
  }, [repositories])

  function handleFavorite (id) {
    const newRepositories = repositories.map( repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    })

    setRepositories(newRepositories);
  }

  return (
    <>
      <div className="conteiner">
        <h1>You have {countRepositories} favorite repositories.</h1>
        <ul>{repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar projetos</button>  
        </li>
      ) )}</ul> 
      </div>
      
    </>
  );
}
