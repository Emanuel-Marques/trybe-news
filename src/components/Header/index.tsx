import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <img src="../../public/logo-menu.png" alt="logo-trybe" />
            <div className={styles['div-center']}>
              <Link className={styles.h1} to="/"><h1>TRYBE NEWS</h1></Link>
            </div>
        </header>
    )
}

export default Header;