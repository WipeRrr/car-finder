import { NavLink } from 'react-router-dom';
import css from "./Nav.module.css"

export default function Nav() {
  return (
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
  );
}
