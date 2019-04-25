__devMode__&& console.log('src/components/test1/redux/reducer')

import * as types from './actionTypes'
import {test1Fetch, resetData} from './actions'

export default (val=
  {
    show: true,
    isData: true,
    pending: true,
    data: {},
    fetchData: test1Fetch,
    resetData: resetData
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
    case types.TEST1_RESET_DATA:
      newVal=
      {
        ...val,
        pending: true,
        data: {}
      }
      return newVal
    default:
      return val
  }
}
