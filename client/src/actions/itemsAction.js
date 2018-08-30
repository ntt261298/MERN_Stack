import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, SET_LOADING} from './types';

export const getItems = () => dispatch => {
  dispatch(setLoading());
  axios.get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
};

export const addItem = name => dispatch => {
  axios.post('/api/items', name)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
};

export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  )
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
