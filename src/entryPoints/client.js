__devMode__&& console.log('src/entryPoints/client')

import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import {getStore} from '../redux/store/store'
import App from '../components/app/render/app'
import {deserialize} from '../helpers/helpers'

const render= (state)=>
{
  const store= getStore({isClient: true}, state)
  hydrate
  (
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
}

window.addEventListener('popstate', function(e) {
  const decoded= decodeURIComponent(e.state)
  const state= deserialize(decoded)
  render(state)
})

render()
