import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props){
 
  
    return(<>
      <SearchBar
          onSearch={props.onSearch}
        />
        <Link to="/home"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
        
    </>);
}