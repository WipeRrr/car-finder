import React, { useState } from 'react';
import css from './CarsList.module.css';
import getCity from 'utils/getCity';
import getCountry from 'utils/getCountry';
import Modal from 'components/Modal';
import CarModal from 'components/CarModal/CarModal';
import Button from 'components/Button';
import heart from '../../images/sprite.svg';

export default function CarsList({ car }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);


  const [favoriteCars, setFavoriteCars] = useState(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem('favoriteCars')) || [];
    return savedFavorites;
  });


  const isFavorite = favoriteCars.some(
    favoriteCar => favoriteCar.id === car.id
  );


  const toggleFavorite = () => {
    if (isFavorite) {

      const updatedFavorites = favoriteCars.filter(
        favoriteCar => favoriteCar.id !== car.id
      );

      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites));

      setFavoriteCars(updatedFavorites);
    } else {

      const updatedFavorites = [...favoriteCars, car];

      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites));

      setFavoriteCars(updatedFavorites);
    }
  };


  const {
    id,
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const country = getCountry(address);
  const city = getCity(address);

  return (
    <li className={css.car_item}>
      <div className={css.card}>
        <div>
          <img className={css.car_img} src={img} alt="car" />
        </div>
        <button
          className={css.btn_favorite}
          type="button"
          onClick={toggleFavorite}
        >
          <svg
            className={`${css.favorite_svg} ${isFavorite ? css.favorite : ''}`}
            width="18"
            height="18"
          >
            <use href={heart + '#heart'}></use>
          </svg>
        </button>
        <div className={css.info}>
          <p>
            {make}
            {make.length <= 5 && (
              <span className={css.model}> {model}</span>
            )}, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <div className={css.about}>
          <p>
            <span>{city} | </span>
            <span>{country} | </span>
            <span>{rentalCompany} | </span>
          </p>

          <p>
            <span>{type} | </span>
            <span>{model} | </span>
            <span>{id} | </span>
          </p>
        </div>
        <Button text={'Learn more'} onClick={toggleModal} />
        {showModal && (
          <Modal onClose={toggleModal}>
            <CarModal advert={car} />
          </Modal>
        )}
      </div>
    </li>
  );
}
