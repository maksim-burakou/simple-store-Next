import Link from "next/link";
import { Container } from "../Container";

import { Cart } from "../../Cart";

import logo from "../../../public/assets/badge.png";

import "./styles.module.scss";

export const Header = () => (
  <header className="header">
    <Container>
      <div className="header__wrapper">
        <div className="logo">
          <Link className="logo__link" href="/">
            <a>
              <img className="logo__image" src={logo} alt="logo" />
              <h1 className="logo__text">Store</h1>
            </a>
          </Link>
        </div>
        <Cart />
      </div>
    </Container>
  </header>
);
