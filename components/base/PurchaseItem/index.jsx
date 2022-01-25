import { useCartContext } from "../../../contexts/cart";

import { amountTypeModification } from "../../../models/amountModifier";

import styles from "../../../styles/PurchaseItem.module.scss";

export const PurchaseItem = ({ id, title, price, amount }) => {
  const { deletePurchase, modifyPurchaseAmount } = useCartContext();
  const decreaseAmount = () =>
    modifyPurchaseAmount(id, amount, amountTypeModification.decr);
  const increaseAmount = () =>
    modifyPurchaseAmount(id, amount, amountTypeModification.incr);
  const deleteItem = () => deletePurchase(id);
  return (
    <div className={styles.purchase}>
      <h3 data-testid="title" className={styles.purchase__title}>
        {title}
      </h3>
      <div className={styles.purchase__amount}>
        <p>Amount: </p>
        <button className={styles.amount__button} onClick={decreaseAmount}>
          -
        </button>
        <span data-testid="amount">{amount}</span>
        <button className={styles.amount__button} onClick={increaseAmount}>
          +
        </button>
      </div>
      <div className={styles.purchase__info}>
        <p data-testid="id" className={styles.purchase__id}>
          Id: {id}
        </p>
        <p data-testid="price" className={styles.purchase__price}>
          Price: {`${price * amount}$`}
        </p>
      </div>
      <button className={styles.purchase__button} onClick={deleteItem}>
        X
      </button>
    </div>
  );
};
