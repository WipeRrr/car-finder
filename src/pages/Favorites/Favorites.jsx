import React, { useState, useEffect } from 'react';
import CarsList from 'components/CarsList';
import css from './Favorites.module.css';

export default function Favorites() {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem('favoriteCars')) || [];
    setFavoriteCars(savedFavorites);
  }, [favoriteCars]);

  return (
    <div>
      <ul className={css.car_thumb}>
        {favoriteCars.map(car => (
          <CarsList key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
}
