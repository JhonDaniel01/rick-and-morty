import './App.css'
import {useState, useEffect} from "react" 
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";  
import imagen from './img/ra1.png'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';


function App () {
  const [characters,setCharacters]=useState([]);
  const location=useLocation();
  const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);

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
       <Nav onSearch={onSearch} location={location.pathname}/>
       </div>
       </div>

      <div className='contenido'> 
    
    <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
      <Route path='/detail/:detailId' element={<Detail/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    
      </div>
    </div>
  )
}

export default App
