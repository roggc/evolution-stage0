__devMode__&& console.log('src/components/stateExample1/redux/actions')

import * as types from './actionTypes'

export const stateExample1MessageSet=(val)=>
{
  const act=
  {
    type: types.STATEEXAMPLE1_MESSAGE_SET,
    val: val
  }
  return act
}
