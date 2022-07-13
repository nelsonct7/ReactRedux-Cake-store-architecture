import React from 'react'
import {buyIce} from '../reduxstore/features/icecream/iceActions'
import {useSelector,useDispatch} from 'react-redux'

function IceCreamContainer() {

  const numberOfIceCreams=useSelector(state=>state.iceCream.numberOfIceCreams)
  const dispatch=useDispatch()

  return (
    <div>
      <h3>Number of Ice Creams : {numberOfIceCreams}</h3>
      <button onClick={()=>dispatch(buyIce())}>Buy Icecream</button>
    </div>
  )
}

export default IceCreamContainer
