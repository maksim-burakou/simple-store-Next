import { useState, useCallback } from "react";

import { PurchaseItem } from "../base/PurchaseItem";

import cart from "../../public/assets/cart.png";

import styles from "../../styles/Cart.module.scss";
import { useCartContext } from "../../contexts/cart";
import Image from "next/image";

export const Cart = () => {
  const [selected, setSelected] = useState(false);

  const { cartList, totalPrice } = useCartContext();

  const toggleCart = useCallback(() => {
    setSelected((prevValue) => !prevValue);
  }, []);

  return (
    <>
      <button className={styles.cartButton} onClick={toggleCart}>
        <div className={styles.cartButton__image}>
          <Image src={cart} alt="cart-icon" layout="responsive" priority/>
        </div>
        {!!cartList.length && (
          <div className={styles.notification}>
            <span>{cartList.length}</span>
          </div>
        )}
      </button>
      <div
        className={
          selected ? `${styles.cart} ${styles.cart__selected}` : styles.cart
        }
      >
        <div className={styles.cart__header}>
          <h3>Cart</h3>
          <button onClick={toggleCart}>X</button>
        </div>
        <div className={styles.cart__list}>
          {cartList.map((item) => (
            <PurchaseItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>
        <div className={styles.cart__footer}>
          <h3>
            Total price: <span>{`${totalPrice}$`}</span>
          </h3>
          <button onClick={toggleCart}>Order now</button>
        </div>
      </div>
    </>
  );
};
