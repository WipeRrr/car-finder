import { useEffect, useState } from 'react';
import { getCars } from 'services/API';
import CarsList from 'components/CarsList';
import css from './Catalog.module.css';
import { Filter } from 'components/Filter';
export default function Catalog() {
  const [cars, SetCars] = useState([]);





  
  useEffect(() => {
    getCars().then(SetCars);
  }, []);



  return (
    <>
      <Filter></Filter>
      <ul className={css.car_thumb}>
        {cars.map(car => (
          <CarsList key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
}
