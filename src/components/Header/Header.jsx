import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.navList}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>

        <NavLink className={css.navLink} to="/catalog">
          Catalog
        </NavLink>

        <NavLink className={css.navLink} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
