import { useState } from "react";
import { connect } from "react-redux";
// 
import { ADD_BOOKINGS, DELETE_BOOKINGS } from "../../../redux/reducer/bookings";

const mapStateToProps = (state, ownProps) => {
    return {
        state: { ...state }
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchAdd: (data) => {
            dispatch(ADD_BOOKINGS(data))
        },
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

const dummyData = {
    date: "11-01-23",
    from: "Dhaka",
    guest: 2,
    ticketClass: "Business",
    to: "Sylhet",
}

function Form({ state, dispatchAdd }) {
    const [formData, setformData] = useState({})

    function handleChange(e) {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (state.length < 3) {
            dispatchAdd(formData);
        }
    }

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="from"
                                id="lws-from"
                                required={true}
                            >
                                <option value="" hidden="">Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="to"
                                id="lws-to"
                                required={true}
                            >
                                <option value="" hidden="">Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input
                            onChange={handleChange}
                            type="date"
                            className="outline-none px-2 py-2 w-full date"
                            name="date"
                            id="lws-date"
                            required={true}
                        />
                    </div>
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Vector (1).svg" alt="" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                id="lws-guests"
                                required={true}
                            >
                                <option value="" hidden="">Please Select</option>
                                <option value={1}>1 Person</option>
                                <option value={2}>2 Persons</option>
                                <option value={3}>3 Persons</option>
                                <option value={4}>4 Persons</option>
                            </select>
                        </div>
                    </div>
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Vector (3).svg" alt="" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="ticketClass"
                                id="lws-ticketClass"
                                required={true}
                            >
                                <option value="" hidden="">Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>
                    <button className="addCity" type="submit" id="lws-addCity" >
                        <svg
                            width="15px"
                            height="15px"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default connector(Form);

