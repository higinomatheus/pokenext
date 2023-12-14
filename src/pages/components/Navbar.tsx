import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/pokeball.png";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Image src={logo} width={30} height={30} alt="Ícone da pokeball" />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.navbar__menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
