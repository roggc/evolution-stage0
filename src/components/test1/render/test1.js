__devMode__&& console.log('src/components/test1/render/test1')

import React from 'react'
import style from '../style/test1.scss'
import {connect} from 'react-redux'

const comp= (props)=>
(
  props.test1.show&&
  <div className={style.card}>
    {props.test1.pending|| (()=>
      (
        props.test1.data.name
      ))()} <br/>
    posts
    <hr/>
    {props.comp}
    <hr/>
    {props.test1.pending|| (()=>
      (
        <ul>
        {props.test1.data.posts.map((post, key)=>
          (
            <li key={key}>{post}</li>
          ))}
        </ul>
      ))()}
  </div>
)

const mapStateToProps=(state)=>
{
  const ob=
  {
    test1: state.components.test1
  }
  return ob
}

export default connect(mapStateToProps)(comp)
