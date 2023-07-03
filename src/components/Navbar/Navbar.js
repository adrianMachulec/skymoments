import styles from "./Navbar.module.scss";
import logoImg from "./../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <img src={logoImg} alt="logo" className={styles.logoImg} />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
            end
          >
            O mnie
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
            end
          >
            Portfolio
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
            end
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
