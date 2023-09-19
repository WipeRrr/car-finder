import getCity from 'utils/getCity';
import getCountry from 'utils/getCountry';
 import { Link } from 'react-router-dom'; 

import css from "./CarModal.module.css"


export default function CarModal({ advert }) {
  if (!advert) {
    return;
  }

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    // accessories,
    // functionalities,
    rentalPrice,
    // rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = advert;

  const city = getCity(address);
  const country = getCountry(address);
  const rentalConditionsArray = rentalConditions.split('\n');
  const minAgeArray = rentalConditionsArray[0].split(': ');

  const reg = /(?=\B(?:\d{3})+(?!\d))/g;
  const millageChanged = mileage.toString().replace(reg, ',');

  const phoneNumber = `tel:+380730000000`;

  return (
    <div className={css.container}>
      <img className={css.img} src={img} alt={make} />
      <div className={css.info}>
        <div>
          <h1 className={css.title}>
            {make} <span className={css.model}>{model}</span>, {year}
          </h1>
          <div className={css.car_about}>
            <p>
              {city} | {country} | Id: {id} | Year: {year} | Type: {type}
            </p>
            <p>
              Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
            </p>
          </div>

          <p className={css.description}>{description}</p>
        </div>

        <div>
          <h2 className={css.title_info}>Accessories and functionalities:</h2>
        </div>
        <div>
          <h2 className={css.title_info}>Rental Conditions:</h2>
          <ul className={css.rental_list}>
            <li className={css.rental_list_item}>
              {minAgeArray[0]}:{' '}
              <span className={css.item_value}>{minAgeArray[1]}</span>
            </li>
            <li className={css.rental_list_item}>
              {' '}
              {rentalConditionsArray[1]}
            </li>
            <li className={css.rental_list_item}>{rentalConditionsArray[2]}</li>
            <li className={css.rental_list_item}>
              Mileage: <span className={css.item_value}>{millageChanged}</span>
            </li>
            <li className={css.rental_list_item}>
              Price: <span className={css.item_value}>{rentalPrice}</span>
            </li>
          </ul>
        </div>
      </div>
      <Link className={css.phone} to={phoneNumber}>
        Rental car
      </Link>
    </div>
  );
}
