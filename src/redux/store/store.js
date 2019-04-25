__devMode__&& console.log('src/redux/store/store')

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import {environmentSet} from '../extra/environment/actions'
import stateHistory from './middleware/stateHistory'
import dataFetching from './middleware/dataFetching'
import resetData from './middleware/resetData'

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
    store= applyMiddleware(...middlewares)(createStore)(reducer, state)
    store.dispatch(environmentSet({isClient:true}))
  }
  else
  {
    const middlewares = [thunk, resetData]
    store= applyMiddleware(...middlewares)(createStore)(reducer, state)
    if(state)
    {
      store.dispatch(environmentSet({isClient:false}))
    }
  }
  return store
}
