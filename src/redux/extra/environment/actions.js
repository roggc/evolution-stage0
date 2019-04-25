__devMode__&& console.log('src/redux/extra/environment/actions')

import * as types from './actionTypes'

export const environmentSet=(val)=>
{
  const act=
  {
    type: types.ENVIRONMENT_SET,
    val: val
  }
  return act
}
