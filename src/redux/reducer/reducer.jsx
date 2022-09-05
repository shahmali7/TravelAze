import { Actiontypes } from "../contains/ActionTypes";
import { Cities } from "../../FakeApi/Cities";


export const initialState={
    item: Cities,
    BasketData: [],
}

export const CityReducer=(state=initialState,action)=>{
   switch(action.type){
    case Actiontypes.GET_ITEM:

    return {
        ...state,
        BasketData:[...state.BasketData,action.payload.item]
    }
    default:
        return state
   }
}