import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import { sortByDate } from './helpers/helpers';
import { fetchCompanies } from './services/api';

function App() {
  const [companiesData, setCompaniesData] = useState([])
  const [bookedSlots, setBookedSlots] = useState([])

  const handleBookedSlots = (bookedSlot: never) => {

    let bookedSlotsState = [...bookedSlots]
    if (bookedSlotsState.indexOf(bookedSlot) === -1) {
      bookedSlotsState.push(bookedSlot)
    }
    else {
      bookedSlotsState = bookedSlotsState.filter((n) => n != bookedSlot);
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
    <div className="App">
      <Table companiesData={companiesData} bookedSlots={bookedSlots} handleBookedSlots={handleBookedSlots} />
    </div>
  );
}

export default App;
