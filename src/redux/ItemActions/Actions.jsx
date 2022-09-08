import { Actiontypes } from "../contains/ActionTypes"

export const AddFavourites = (item)=>{
    return{
        type : Actiontypes.GET_ITEM,
        payload: { item },
    }
}
export const DeleteItem =(id)=>{
    return {
        type :Actiontypes.Delete_ITEM,
        payload : {id}
    }
}