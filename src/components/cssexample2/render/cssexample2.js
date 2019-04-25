__devMode__&& console.log('src/components/cssexample2/render/cssexample2')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/cssexample2.scss'

const comp= (props)=>
(
  props.cssexample2.show&&
  <div className={style.aClass}>comp2</div>
)

const mapStateToProps=(state)=>
{
  const ob=
  {
    cssexample2: state.components.cssexample2
  }
  return ob
}

export default connect(mapStateToProps)(comp)
