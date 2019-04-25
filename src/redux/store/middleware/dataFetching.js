__devMode__&& console.log('src/redux/store/middleware/dataFetching')

export default store => next => action => {
  next(action)

  console.log(action.type, 'i\'am going to check for fetching data needs...')
  
  const state= store.getState()

  Object.keys(state.components).forEach(key=>
  {
    let comp = state.components[key];
    comp.show&& comp.pending&& store.dispatch(comp.fetchData())
  });

}
