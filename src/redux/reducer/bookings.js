export const ADD_BOOKINGS = (formData) => ({ type: "ADD_BOOKINGS", payload: { data: formData } });
export const DELETE_BOOKINGS = (index) => ({ type: "DELETE_BOOKINGS", payload: { ind: index } });

export default function bookingsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_BOOKINGS":
            return [...state, action.payload.data];
        case "DELETE_BOOKINGS":
            return state.filter((e, i) => i !== action.payload.ind);
        default:
            return state;
    }
}
