import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addCharacter, removeCharacter } from '../../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';
function Card({id,name,species,gender,image,onClose,addCharacter,removeCharacter,myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   const character={id,name,species,gender,image,onClose}
   console.log(myFavorites);
   const handleFavorite=()=>{
      if (isFav){setIsFav(false);removeCharacter(id)}
      else {setIsFav(true); addCharacter(character)}
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         <button className={style.closeBoton} onClick={()=>onClose(id)}>X</button>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <Link to={`/detail/${id}`} >
            <h2 className={style.text}>{name}</h2>
         </Link>
         <img className={style.image} src={image} alt="" />
         <h2 className={style.text}>{species}</h2>
         <h2 className={style.text}>{gender}</h2>
      </div>
   );
}
const mapStateToProps = (state) => {
   return {myFavorites: state.myFavorites,};
 };

 const mapDispatchToProps = (dispatch) => {
   return {
     removeCharacter: (id) => {
       dispatch(removeCharacter(id));
      },
      addCharacter: (character)=> {
         dispatch(addCharacter(character))
      }
   };
 };
 export default connect(mapStateToProps, mapDispatchToProps)(Card);