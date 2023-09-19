import { useEffect, useState } from 'react';
import { getCars } from 'services/API';
import CarsList from 'components/CarsList';
import css from './Catalog.module.css';
import { Filter } from 'components/Filter';
export default function Catalog() {
  const [cars, SetCars] = useState([]);
  const [page, SetPage] = useState(1);

  useEffect(() => {
   
    getCars(page).then(newCars => {
      SetCars(prevCars => [...prevCars, ...newCars]);
    });
  }, [page]);

  const loadMoreBtn = () => {
    SetPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Filter></Filter>
      <ul className={css.car_thumb}>
        {cars.map(car => (
          <CarsList key={car.id} car={car} />
        ))}
      </ul>
      <button className={css.btn_load} type="button" onClick={loadMoreBtn}>
        Load more
      </button>
    </>
  );
}
