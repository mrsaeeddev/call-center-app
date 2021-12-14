import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { sortByDate } from '../helpers/helpers';
import { fetchCompanies } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Booking() {
  const [companiesData, setCompaniesData] = useState([])
  const [bookedSlots, setBookedSlots] = useState([])

  const handleBookedSlots = (bookedSlot: never, id: any) => {
    console.log(id)
    let bookedSlotsState = [...bookedSlots]
    if (bookedSlotsState.indexOf(bookedSlot) === -1) {
      bookedSlotsState.push(bookedSlot)
    }
    else {
      bookedSlotsState = bookedSlotsState.filter((n) => n !== bookedSlot);
    }
    console.log(bookedSlotsState)
    setBookedSlots(bookedSlotsState)
  }

  useEffect(() => {
    fetchCompanies().then((data) => {
      let sortedData: any = sortByDate(data)
      console.log(sortedData, 'sroted')
      setCompaniesData(sortedData)
    });
  }, []);

  return (
    <Container>
      <Table companiesData={companiesData} bookedSlots={bookedSlots} handleBookedSlots={handleBookedSlots} />
    </Container>
  );
}

export default Booking;
