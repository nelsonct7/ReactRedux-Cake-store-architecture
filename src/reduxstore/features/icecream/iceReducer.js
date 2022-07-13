import { buyIce } from './iceActions'
import {BUY_ICE} from './iceType'

const initialState={
    numberOfIceCreams:20
}

const iceReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICE:{
            return{
                ...state,
                numberOfIceCreams:state.numberOfIceCreams-1
            }
        }
        default:return state
    }

}

export default iceReducer