__devMode__&& console.log('src/redux/extra/other/actions')

import * as types from './actionTypes'

const otherSet=()=>
{
  const act=
  {
    type: types.OTHER_SET
  }
  return act;
}

export const otherDo= ()=>(dispatch)=>
{
  dispatch(otherSet())
}
