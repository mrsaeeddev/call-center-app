import React from 'react'

function Reservations(props: any) {
    return (<div>
        <div>{props.booked_slots && props.booked_slots.map((v: any) => {
            return <div> {v}</div>
        })}</div></div>)
}

export default Reservations;