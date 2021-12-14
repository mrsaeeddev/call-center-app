import React from 'react'

function Slots(props: any) {
    return (<div>
        <div>{props.timeSlots && props.timeSlots.map((v: any) => {
            return <div onClick={() => props.handleBookedSlots(v.start_time, props.companyId)}> {v.start_time}</div>
        })}</div></div>)
}

export default Slots;