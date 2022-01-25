import Link from "next/link";
import { Container } from "../Container";

import { Cart } from "../../Cart";

import logo from "../../../public/assets/badge.png";

import styles from "../../../styles/Header.module.scss";
import Image from "next/image";

export const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logoLink}>
              <div className={styles.logoImage}>
                <Image src={logo} alt="logo" layout="responsive" priority/>
              </div>
              <h1 className={styles.logoText}>Store</h1>
            </a>
          </Link>
        </div>
        <Cart />
      </div>
    </Container>
  </header>
);
