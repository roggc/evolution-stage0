__devMode__&& console.log('src/components/stateExample1/redux/reducer')

import * as types from './actionTypes'

export default (val=
  {
    show: true,
    isData: false,
    message: "hello world!"
  }, act) =>
{
  let newVal
  switch(act.type)
  {
    case types.STATEEXAMPLE1_MESSAGE_SET:
      newVal=
      {
        ...val,
        message: act.val
      }
      return newVal
    default:
      return val
  }
}
