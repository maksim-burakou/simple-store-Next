import { useState, useEffect } from "react";

import { productStatus } from "../../models/productStatus";
import bestPriceIcon from "../../public/assets/best-price.png";
import onSalesIcon from "../../public/assets/discount.png";
import { placeholder } from "../../constants/imagePlaceholder";

import styles from "../../styles/ProductCard.module.scss";
import { useCartContext } from "../../contexts/cart";
import Link from "next/link";
import Image from "next/image";

export const ProductCard = ({
  id,
  image,
  title,
  info,
  status,
  price,
  prevPrice = null,
}) => {
  const [isActive, setIsActive] = useState(true);
  const { cartList, addPurchase } = useCartContext();
  useEffect(() => {
    !!cartList.find((purchase) => purchase.id === id)
      ? setIsActive(false)
      : setIsActive(true);
  }, [cartList, id]);
  const handlePurchase = (e, id, title, price) => {
    e.preventDefault();
    addPurchase(id, title, price);
    setIsActive(false);
  };
  return (
    <Link href={`/product/${id}`}>
      <a>
        <div className={styles.productCard}>
          {status === productStatus.goodPrice ? (
            <div className={styles.bestPrice__icon}>
              <Image src={bestPriceIcon} alt="best price" layout="responsive" />
            </div>
          ) : status === productStatus.onSales ? (
            <div className={styles.onSales__icon}>
              <Image src={onSalesIcon} alt="on sales" layout="responsive" />
            </div>
          ) : null}
          <figure className={styles.productCard__head}>
            <Image
              data-testid="product-сard__test--image"
              className={styles.productCard__image}
              src={image}
              alt={`${title}. ${info}. ${status}. ${price}`}
              layout="fill"
              placeholder="blur"
              blurDataURL={placeholder}
            />
            <figcaption>
              <h3 data-testid="product-сard__test--title">{title}</h3>
            </figcaption>
          </figure>
          <section className={styles.productCard__body}>
            <p
              data-testid="product-сard__test--info"
              className={styles.productCard__info}
            >
              {info}
            </p>
            <div
              data-testid="product-сard__test--price"
              className={styles.productPrice}
            >
              {status === productStatus.onSales ? (
                <h1
                  className={`${styles.productPrice__current} ${styles.sales}`}
                >
                  {`${price}$ `}
                  <span
                    className={styles.productPrice__prev}
                  >{`${prevPrice}$`}</span>
                </h1>
              ) : (
                <h1
                  className={`${styles.productPrice__current} ${
                    status === productStatus.goodPrice ? styles.goodPrice : ""
                  }`}
                >
                  {`${price}$`}
                </h1>
              )}
              {!price && (
                <h1 className={styles.productPrice__current}>not defined</h1>
              )}
            </div>
            <button
              disabled={!isActive}
              className={`${styles.productCard__button} ${
                isActive ? "" : styles.disabled
              }`}
              onClick={(e) => handlePurchase(e, id, title, price)}
            >
              {isActive ? "Add to trolley" : "Already in the cart"}
            </button>
          </section>
        </div>
      </a>
    </Link>
  );
};
