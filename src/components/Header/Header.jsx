import css from './Header.module.css';
import Nav from 'components/Nav';

export default function Header() {
  return (
    <header className={css.header}>
     <Nav/>
    </header>
  );
}
