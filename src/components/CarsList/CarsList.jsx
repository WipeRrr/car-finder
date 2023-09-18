import css from './CarsList.module.css';
import getCity from 'utils/getCity';
import getCountry from 'utils/getCountry';

export default function CarsList({ car }) {

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    // description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    // functionalities,
    rentalPrice,
    rentalCompany,
    address,
    // rentalConditions,
    // mileage,
  } = car;

  const country = getCountry(address);
  const city = getCity(address);

  return (
    <li className={css.car_item}>
      <div className={css.card}>
        <div>
          <img className={css.car_img} src={img} alt="car" />
        </div>

        <div className={css.info}>
          <p>
            {make} <span className={css.model}>{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <div className={css.about}>
          <p>
            <span>{city} | </span>
            <span>{country} | </span>
            <span>{rentalCompany} | </span>
            {/* <span>{type} | </span> */}
          </p>

          <p>
            <span>{type} | </span>
            <span>{model} | </span>
            <span>{id} | </span>
            {/* <span>{type} | </span> */}
          </p>
        </div>
      </div>
    </li>
  );
}
