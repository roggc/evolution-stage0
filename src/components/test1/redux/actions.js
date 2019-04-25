__devMode__&& console.log('src/components/test1/redux/actions')

import * as types from './actionTypes'

export const resetData= ()=>
{
  const act=
  {
    type: 'TEST1_RESET_DATA'
  }
  return act
}

export const test1Fetch= ()=>(dispatch)=>
{
  const test1Set= (data)=>
  {
    const act=
    {
      type: 'TEST1_SET',
      val: data
    }
    return act
  }

  let data
  setTimeout(()=>
  {
    data=
    {
      name: 'john',
      posts:
      [
        'hey, how are you',
        'this is another post'
      ]
    }
    dispatch(test1Set(data))
  }, 3000)
}
