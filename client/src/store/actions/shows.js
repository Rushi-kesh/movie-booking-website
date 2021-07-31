import { GET_SHOWS, ADD_SHOW,ADD_SHOW_FAILED } from '../types';
import { setAlert } from './alert';
export const getShows = (id) => async dispatch => {
    try {
      const token = localStorage.getItem('jwtToken');
      const url =  '/shows/'+id;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const shows = await response.json();
      if (response.ok) {
        dispatch({ type: GET_SHOWS, payload: shows });
        return shows;
      }
    } catch (error) {
      dispatch(setAlert(error.message, 'error', 5000));
    }
  };
export const bookShow = ({
    movie_id ,
    movie_name ,
    user_id ,
    location ,
    language ,
    showdate ,
    showtime ,
    tickets,
    price
  }) => async dispatch => {
    try {
      const token = localStorage.getItem('jwtToken');
      const url =  '/shows';
      const body = { movie_id, movie_name ,user_id ,location ,language ,showdate ,showtime ,tickets, price };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const responseData = await response.json();
      if (response.ok) {
        dispatch({ type: ADD_SHOW, payload: responseData });
        dispatch(setAlert('Register Success', 'success', 5000));
      }
      if (responseData._message) {
        dispatch({ type: ADD_SHOW_FAILED });
        dispatch(setAlert(responseData.message, 'error', 5000));
      }
    } catch (error) {
      dispatch({ type: ADD_SHOW_FAILED });
      dispatch(setAlert(error.message, 'error', 5000));
    }
  };