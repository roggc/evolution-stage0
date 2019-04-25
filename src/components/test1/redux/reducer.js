__devMode__&& console.log('src/components/test1/redux/reducer')

import * as types from './actionTypes'
import {test1Fetch} from './actions'

export default (val=
  {
    show: true,
    pending: true,
    data: {},
    fetchData: test1Fetch
  }, act) =>
{
  let newVal
  switch(act.type)
  {
    case types.TEST1_SET:
      newVal=
      {
        ...val,
        pending: false,
        data: act.val
      }
      return newVal
    default:
      return val
  }
}
