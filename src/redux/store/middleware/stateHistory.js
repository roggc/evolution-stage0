__devMode__&& console.log('src/redux/store/middleware/stateHistory')

import * as types from '../../extra/environment/actionTypes'
import serialize from 'serialize-javascript'

export default store => next => action => {
  next(action)

  //console.log('stateHistory', action.type)

  const state= store.getState()
  const serialized= serialize(state)//JSON.stringify(state)
  const encoded= encodeURIComponent(serialized)
  if(action.type === types.ENVIRONMENT_SET)
  {
    //history.replaceState(encoded, null, '?state='+encoded)
  }
  else
  {
    history.pushState(encoded, null, '?state='+encoded)
  }
}
