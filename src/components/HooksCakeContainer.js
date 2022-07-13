import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../reduxstore/features/cake/cakeActions'

function HooksCakeContainer() {
    const numberOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of Cakes : {numberOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
