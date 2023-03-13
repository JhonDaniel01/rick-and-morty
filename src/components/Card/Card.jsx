import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <div className={style.container}>
         <button className={style.closeBoton} onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`} > 
            <h2 className={style.text}>{name}</h2>
         </Link>
         <img className={style.image} src={image} alt="" />
         <h2 className={style.text}>{species}</h2>
         <h2 className={style.text}>{gender}</h2>
      </div>
   );
}
