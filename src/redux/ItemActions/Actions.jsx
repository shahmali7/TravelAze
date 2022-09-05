import { Actiontypes } from "../contains/ActionTypes"

export const AddFavourites = (item)=>{
    return{
        type : Actiontypes.GET_ITEM,
        payload: { item },
        
    }
}