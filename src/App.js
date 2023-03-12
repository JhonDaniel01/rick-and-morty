import './App.css'
import {useState} from "react" 
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { Routes, Route } from "react-router-dom";  
import imagen from './img/ra1.png'
import About from './components/About/About'
import Detail from './components/Detail/Detail'


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
        <div className='contenedor'>
          <img className='imagen' src={imagen} alt=""/>
       <div className='nav'>
       <Nav onSearch={onSearch}/>
       </div>
       </div>

      <div> 
    
    <Routes>
      <Route path='/' element={<Cards characters={characters} onClose={onClose}/>} />
      <Route path='/detail/:detailId' element={<Detail/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    
      </div>
    </div>
  )
}

export default App
