import Card from '../Card/Card';
import style from './favs.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function Favs(props) {
   const characters = useSelector((state) => state.characters);
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(getCharacters());
    }, []);

   return ( <div className={style.contenedorCard}>
      {characters.map(character=>{
          return <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={props.onClose}
        />
      }
      )}
   </div>);
}