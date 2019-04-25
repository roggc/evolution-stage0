__devMode__&& console.log('src/components/cssexample1/render/cssexample1')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/cssexample1.scss'

const comp= (props)=>
(
  props.cssexample1.show&&
  <div className={style.aClass}>what is happening here ...</div>
)

const mapStateToProps=(state)=>
{
  const ob=
  {
    cssexample1: state.components.cssexample1
  }
  return ob
}

export default connect(mapStateToProps)(comp)
