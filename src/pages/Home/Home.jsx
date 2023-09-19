import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.home}>
      <NavLink to="/catalog" className={css.title}>
        Find car of your dream →
      </NavLink>
    </div>
  );
}
