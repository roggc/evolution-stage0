__devMode__&& console.log('src/redux/store/middleware/resetDasta')

export default store => next => action => {
  next(action)

  const state= store.getState()

  Object.keys(state.components).forEach(key=>
  {
    let comp = state.components[key];
    comp.isData&& !comp.pending&& store.dispatch(comp.resetData())
  });

}
