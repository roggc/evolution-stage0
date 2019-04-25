__devMode__&& console.log('src/redux/reducer')

import {combineReducers} from 'redux'
import environment from './extra/environment/reducer'
import stateExample1 from '../components/stateExample1/redux/reducer'
import test1 from '../components/test1/redux/reducer'
import cssexample2 from '../components/cssexample2/redux/reducer'
import cssexample1 from '../components/cssexample1/redux/reducer'

export default combineReducers({
    environment: environment,
    components: combineReducers({
      stateExample1: stateExample1,
      test1: test1,
      cssexample2: cssexample2,
      cssexample1: cssexample1
    })
})
