import { BUY_CAKE } from "./cakeTypes"

const initialstate={
    numOfCakes:10
}

const cakeReducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_CAKE:return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

export default cakeReducer