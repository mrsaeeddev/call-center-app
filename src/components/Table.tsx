import React from 'react'
import Reservations from './Reservations';
import Slots from './Slots';

function Table(props: any) {
    console.log(props.bookedSlots)
    return (<div>
        {props.companiesData && props.companiesData.map((v: any) => {
            return <div>
                <Reservations booked_slots={props.bookedSlots} />
                <div>{v.name}</div>
                <Slots timeSlots={v.timeSlots} handleBookedSlots={props.handleBookedSlots} />
            </div>
        })}</div>)
}

export default Table;