__devMode__&& console.log('src/entryPoints/ssr')

import fs from 'fs'
import path from 'path'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {getStore} from '../redux/store/store'
import App from '../components/app/render/app'
import serialize from 'serialize-javascript'
import {deserialize} from '../helpers/helpers'

export const handleRender=(req, res)=> {
    let _store

    if(req.query.state)
    {
      const decoded= decodeURIComponent(req.query.state)
      const state= deserialize(decoded)
      _store= getStore({isClient:false}, state)
    }
    else
    {
      _store= getStore()
    }

    const store= _store
    const state= store.getState()

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    fs.readFile(path.resolve('./out/client/index.html'), 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).send('An error occurred')
      }

      const serialized= serialize(state)//JSON.stringify(state).replace(/</g,'\\u003c')

      return res.send(
        data.replace(
          '$html',
          `${html}`
        ).replace(
          '$state',
          `${serialized}`
        )
      )
    })
  }

  export const __devMode=__devMode__
