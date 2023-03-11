import stiled from 'styled-components'
import {useState} from "react" 

const Boton= stiled.button`

   min-width: 100px;
   height: 40px;
   color: #fff;
   padding: 5px 10px;
   font-weight: bold;
   cursor: pointer;
   transition: all 0.3s ease;
   position: relative;
   display: inline-block;
   outline: none;
   border-radius: 5px;
   border: none;
   background-size: 120% auto;
   background-image: linear-gradient(315deg, #43cea2 0%, #185a9d 75%);
 `;
 const InputT= stiled.input`
 border-radius: 10px;
 background-color: #dfe;
 border: 0;
 width: 10em;
 height: 30px;
 `;
export default function SearchBar(props) {
   const [char,setChar]=useState("");
   const clik=()=>{
      props.onSearch(char);
   }
  
   console.log(char);
   return (
      <div>
         <InputT onChange={e => setChar(e.target.value)} type='search' />
      <Boton onClick={clik}>Agregar</Boton>
      </div>
   );
}
