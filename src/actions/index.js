import constants from '../constants';
import { APIManager } from '../utils';

export default {
  
  fetchProfiles: () => {
    return (dispatch) => {

      APIManager
      .get('/api/profile', null)
      .then(response => {
        // console.log('fetchProfiles: ' + JSON.stringify(response.results));
        dispatch({
          type: constants.PROFILES_RECEIVED,
          profiles: response.results
        })
      })
      .catch(err => {
        alert(err);
      });
    }
  }

}