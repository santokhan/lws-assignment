import { createStore } from 'redux';
// 
import bookingsReducer from './reducer/bookings';

const store = createStore(bookingsReducer);

export default store;