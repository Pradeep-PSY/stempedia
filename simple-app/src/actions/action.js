import { SET_INPUT_VALUE } from "./action.type"

export const setValue = (data) => dispatch =>{
    dispatch({type:SET_INPUT_VALUE, payload: data})
}