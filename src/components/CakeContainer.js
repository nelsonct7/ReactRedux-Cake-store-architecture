import React from 'react'
import {buyCake} from '../reduxstore/features/cake/cakeActions'
import {connect} from 'react-redux'


function CakeContainer(props) {
  return (
    <div>
      <h1>Cake Number : {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
