import style from './Card.module.css'

export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <div className={style.container}>
         <button className={style.closeBoton} onClick={()=>onClose(id)}>X</button>
         <img className={style.image} src={image} alt="" />
         <h2 className={style.text}>{name}</h2>
         <h2 className={style.text}>{species}</h2>
         <h2 className={style.text}>{gender}</h2>
      </div>
   );
}
