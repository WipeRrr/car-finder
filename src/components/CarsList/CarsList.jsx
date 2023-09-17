import css from './CarsList.module.css';


export default function CarsList({cars}) {
  return (
    <ul>
      {cars.map(
        ({
          id,
          year,
          make,
          model,
          type,
          img,
          description,
          fuelConsumption,
          engineSize,
          accessories,
          functionalities,
          rentalPrice,
          rentalCompany,
          address,
          rentalConditions,
          mileage,
        }) => (
       
        <li>{model}</li>
           
       
        )
      )}
    </ul>
  );
}
