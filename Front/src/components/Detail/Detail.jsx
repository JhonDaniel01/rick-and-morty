import { useState, useEffect } from "react";
import { useParams  } from "react-router";
import style from "./Detail.module.css";
import { useNavigate } from "react-router";

export default function Detail(){
    const [character, setCharacter] = useState({});
    const { detailId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        //return setCharacter({});
      }, [detailId]);
     console.log(character);
     return( <div className={style.container}>
        { character.name ?(
         <>
         <img className={style.image} src={character.image} alt="" />
         <div className={style.containerText}>
            <h2 className={style.text}>Name: {character.name}</h2>
            <h2 className={style.text}>Species: {character.species}</h2>
            <h2 className={style.text}>Gender: {character.gender}</h2>
            <h2 className={style.text}>Status: {character.status}</h2>
            <h2 className={style.text}>Origin: {character.origin?.name}</h2>
            <button className={style.boton} onClick={()=>navigate("/home")}>Inicio</button>
         </div>
         </>
         
          ):(<h3>Loading...</h3>)
        }
      </div>);
}