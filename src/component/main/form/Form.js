import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BOOKINGS } from "../../../redux/reducer/bookings";

import mapIcon from '../../../assets/img/icons/Frame.svg'
import vector1 from '../../../assets/img/icons/Vector (1).svg';
import vector3 from '../../../assets/img/icons/Vector (3).svg';

export default function Form() {
    const initialData={ from: "", to: "", date: "", guests: "", ticketClass: "" }
    const [formData, setformData] = useState(initialData);
    const bookings = useSelector(state => state);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (bookings.length < 3) {
            dispatch(ADD_BOOKINGS(formData));            
        }
        setformData(initialData);
    }

    const disabled = bookings.length < 3 ? false : true

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={mapIcon} alt="from" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="from"
                                id="lws-from"
                                required={true}
                                value={formData.from}
                            >
                                <option value="" hidden="">Please Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Saidpur">Saidpur</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                            </select>
                        </div>
                    </div>
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={mapIcon} alt="to" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="to"
                                id="lws-to"
                                required={true}
                                value={formData.to}
                            >
                             <option value="" hidden="">Please Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Saidpur">Saidpur</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
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
                            value={formData.date}
                        />
                    </div>
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={vector1} alt="guests" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                id="lws-guests"
                                required={true}
                                value={formData.guests}
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
                            <img src={vector3} alt="class" />
                            <select
                                onChange={handleChange}
                                className="outline-none px-2 py-2 w-full"
                                name="ticketClass"
                                id="lws-ticketClass"
                                required={true}
                                value={formData.ticketClass}
                            >
                                <option value="" hidden="">Please Select</option>
                                <option value="Business">Business</option>
                                <option value="Economy">Economy</option>
                            </select>
                        </div>
                    </div>
                    <button className="addCity" type="submit" id="lws-addCity" disabled={disabled}>
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

