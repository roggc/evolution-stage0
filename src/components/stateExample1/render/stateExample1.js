__devMode__&& console.log('src/components/stateExample1/render/stateExample1')

import React from 'react'
import {connect} from 'react-redux'
import {stateExample1MessageSet} from '../redux/actions'

const comp= (props)=>
{
  const buttonClicked=()=>
  {
    props.stateExample1MessageSet('i\'ve been clicked')
  }

  const el=
  (
    props.stateExample1.show&&
    <div>
      {props.stateExample1.message}
      <div>
        <button onClick={buttonClicked}>click me ...</button>
      </div>
    </div>
  )
  return el
}

const mapStateToProps=(state)=>
{
  const ob=
  {
    stateExample1: state.components.stateExample1
  };
  return ob
};

const mapDispatchToProps=
{
  stateExample1MessageSet
}

export default connect(mapStateToProps, mapDispatchToProps)(comp)
