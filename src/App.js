import './App.css'
import {useState} from "react" 
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
//import characters from './data.js'
import imagen from './img/ra1.png'
function App () {
  const [characters,setCharacters]=useState([]);

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char)=>char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID');
        }
      });
}

const onClose=(id)=>{
  setCharacters(characters.filter((char)=>char.id !== id));
}
  return (
     
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <div>
          <img className='imagen' src={imagen} alt=""/>
        </div> 
        <div>
          <Cards
            characters={characters}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}

export default App
