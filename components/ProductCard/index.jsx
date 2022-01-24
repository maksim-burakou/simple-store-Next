import { useState, useEffect } from "react";

import { productStatus } from "../../models/productStatus";
import bestPriceIcon from "../../public/assets/best-price.png";
import onSalesIcon from "../../public/assets/discount.png";

import styles from "../../styles/ProductCard.module.scss";
import { useCartContext } from "../../contexts/cart";
import Link from "next/link";

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
            <img
              className="bestPriceIcon"
              src={bestPriceIcon}
              alt="best price"
            />
          ) : status === productStatus.onSales ? (
            <img className="onSalesIcon" src={onSalesIcon} alt="on sales" />
          ) : null}
          <figure className="product-card__head">
            <img
              data-testid="product-dard__test--image"
              className="product-card__image"
              src={image}
              alt={`${title}. ${info}. ${status}. ${price}`}
            />
            <figcaption>
              <h3 data-testid="product-dard__test--title">{title}</h3>
            </figcaption>
          </figure>
          <section className="product-card__body">
            <p
              data-testid="product-dard__test--info"
              className="product-card__info"
            >
              {info}
            </p>
            <div
              data-testid="product-dard__test--price"
              className="product-card__price"
            >
              {status === productStatus.onSales ? (
                <h1 className="product-price--current --sales">
                  {`${price}$ `}
                  <span className="product-price--prev">{`${prevPrice}$`}</span>
                </h1>
              ) : (
                <h1
                  className={`product-price--current ${
                    status === productStatus.goodPrice ? "--good-price" : ""
                  }`}
                >
                  {`${price}$`}
                </h1>
              )}
              {!price && (
                <h1 className="product-price--current">not defined</h1>
              )}
            </div>
            <button
              disabled={!isActive}
              className={`product-card__button ${isActive ? "" : "--disabled"}`}
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
