import css from './Header.module.css';
import Nav from 'components/Nav';
import { Logo } from 'components/Logo/Logo';
export default function Header() {
  return (
    <header className={css.header}>
      <Logo/>
     <Nav/>
    </header>
  );
}
