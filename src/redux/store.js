import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './reducer/bookings';

export const store = configureStore({ reducer: bookingsReducer });
