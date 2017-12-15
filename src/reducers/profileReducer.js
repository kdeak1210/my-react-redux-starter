import constants from '../constants';

var initialState = {
  all: []
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state);

  switch(action.type){
    case constants.PROFILES_RECEIVED:
      console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.payload));
      updated['all'] = action.payload;
      return updated;

    default:
      return updated;
  }
}