import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props){
    console.log(props);
    return(<>
      <SearchBar
          onSearch={props.onSearch}
        />
        <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
        
    </>);
}