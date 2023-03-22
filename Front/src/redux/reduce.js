import { ADD_CHARACTER } from "./actions";
import { REMOVE_CHARACTER } from "./actions";
const initialState={
    myFavorites: [],
};

const rootReducer = (state=initialState,action)=>{
    console.log(action);
    switch (action.type){
    case    ADD_CHARACTER:
      return {...state,myFavorites: [...state.myFavorites,action.payload]};

    case REMOVE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case "GET_CHARACTERS":
        return {
            ...state,
            myFavorites: state.myFavorites.filter(
              (fav) => fav.id === action.payload
            ),
          };
    default:
        return {...state};
    }
}

export default rootReducer;