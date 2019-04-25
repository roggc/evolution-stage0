__devMode__&& console.log('src/redux/store/store')

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import {environmentSet} from '../extra/environment/actions'
import stateHistory from './middleware/stateHistory'
import dataFetching from './middleware/dataFetching'

export const getStore= (conf= {isClient:false}, state)=>
{
  let store
  if(conf.isClient)
  {
    const middlewares = [thunk, stateHistory, dataFetching]
    if(!state)
    {
      state = window.__STATE__
      delete window.__STATE__
    }

    // const store1= applyMiddleware(...middlewares)(createStore)(reducer)
    // let state1= store1.getState()
    // state1={...state1,...state}
    store= applyMiddleware(...middlewares)(createStore)(reducer, state)
    store.dispatch(environmentSet({isClient:true}))
  }
  else
  {
    const middlewares = [thunk]
    store= applyMiddleware(...middlewares)(createStore)(reducer, state)
    if(state)
    {
      store.dispatch(environmentSet({isClient:false}))
    }
  }
  return store
}
