__devMode__&& console.log('src/redux/extra/environment/reducer')

import * as types from './actionTypes'

export default (val= {isClient:false}, act)=>
{
  let newVal
  switch(act.type)
  {
    case types.ENVIRONMENT_SET:
      newVal=
      {
        ...val,
        isClient: act.val.isClient
      };
      return newVal
    default:
      return val
  }
}
