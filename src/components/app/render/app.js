__devMode__&& console.log('src/components/app/render/app')

import React from 'react'
import StateExample from '../../stateExample1/render/stateExample1'
import Comp1 from '../../cssexample1/render/cssexample1'
import Comp2 from '../../cssexample2/render/cssexample2'
import Test1 from '../../test1/render/test1'

export default ()=>
(
  <div>
    <StateExample/>
    <hr/>
    <Comp1/>
    <Comp2/>
    <hr/>
    <Test1 comp={<Comp1/>}/>
  </div>
)
