import { SET_INPUT_VALUE } from "../actions/action.type"

const initialState = {
value:""
}

export const AppReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case SET_INPUT_VALUE:{
            return {
                ...state,
                value:payload
            }
        }
        default: {
            return state
        }
    }
}