import SearchBar from "../SearchBar/SearchBar";

export default function Nav(props){
    console.log(props);
    return(<div>
        <SearchBar
          onSearch={props.onSearch}
        />

    </div>);
}