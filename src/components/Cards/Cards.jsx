import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return ( <div className={style.contenedorCard}>
      {characters.map(character=>{
          return <Card
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
