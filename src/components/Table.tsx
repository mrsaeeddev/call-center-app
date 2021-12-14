import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Reservations from './Reservations';
import Slots from './Slots';

function Table(props: any) {
    console.log(props.bookedSlots)
    return (<Row>
        {props.companiesData && props.companiesData.map((v: any) => {
            return (
                <Col>
                    <Reservations booked_slots={props.bookedSlots} />
                    <div>{v.name}</div>
                    <Slots timeSlots={v.timeSlots} handleBookedSlots={props.handleBookedSlots} companyId={v.id} />
                </Col>
            )
        })}</Row >)
}

export default Table;