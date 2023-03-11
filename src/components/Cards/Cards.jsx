import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return ( <div className={style.contenedorCard}>
      {characters.map(character=>{
          return <Card
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      }
      )}
   </div>);
}
