import * as actiontype from '../Action/Action'

export default function TokenReducer(state="",action){
    switch (action.type){
        case actiontype.STORE_TOKEN: return action.payload.token
        default:return state
    }
     
}