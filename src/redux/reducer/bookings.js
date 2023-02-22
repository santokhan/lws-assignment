const initialArr = {
    bookings: [],
    data: {
        date: "11-01-23",
        from: "Dhaka",
        guest: 2,
        ticketClass: "Business",
        to: "Sylhet",
    }
}

const initialValue = [];

// action types
export const ADD_BOOKINGS = (formData) => ({ type: "ADD_BOOKINGS", payload: { data: formData } });
export const DELETE_BOOKINGS = (index) => ({ type: "DELETE_BOOKINGS", payload: { targetIndex: index } });

/**
 * Reducer function
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export default function bookingsReducer(state = initialValue, action) {

    switch (action.type) {
        case "ADD_BOOKINGS":
            return [...state, action.payload.data];
        case "DELETE_BOOKINGS":
            return state.filter(e => state.indexOf(e) !== action.payload.targetIndex);
        default:
            return [...state];
    }
}

