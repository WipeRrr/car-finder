import { useEffect, useState } from 'react';
import { getCars } from 'services/API';
import CarsList from 'components/CarsList';
export default function Catalog() {
 const [cars, SetCars] = useState([]);

  useEffect(() => {
    getCars().then(SetCars);
  }, []);

  // console.log(cars)

  return <CarsList cars={cars}></CarsList>;
}
