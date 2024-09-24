import React from 'react'
import {useSelector,useDispatch, connect}  from 'react-redux'
import { DEC, INC } from './action/counterAction';



const mapStateToProps = (state) => {

  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    myindc: () =>dispatch({type:'INC_AYNC'}),
    mydec: () => dispatch({type:'DEC_AYNC'}),
   
  }
}



 function ABC({counter,dispatch}) {

   

 const  myindc =() =>dispatch({type:'INC_AYNC'});
 const mydec= () => dispatch({type:'DEC_AYNC'});

    
  return (
    <div>{counter}
        <button onClick={myindc}>+</button>
        <button onClick={mydec}>-</button>
    </div>
  )
}
export default connect(mapStateToProps) (ABC)

