import React, { useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/modal.module.css";
export default function ExitMarket({ assetId, marketId }) {
  const req = () => {
    const url = `https://api.subkhoone.com/api/assets/${assetId}/exit_markets/${marketId}/exit_market_offers`;
    axios
      .post(url, {
        exit_market_offer: {
          price: price,
        },
      })
      .then((res) => console.log(res));
  };
  const [price, setValue] = useState({ price: 0 });
  return (
    <>
      <div className={styles.modalHeader}>
        <div>
          <span>ثبت پیشنهاد</span>
          <i className={`${styles.icon} r-hands-and-gestures`}></i>
        </div>
      </div>
      <div>
        <div className={styles.middleBody}>مشخص کردن ارقام</div>
        {console.log(price)}
        <div className={styles.values}>
          <span>ثبت پیشنهاد خرید این ملک به قیمت هر صاب</span>
          <input
            className={styles.input}
            value={price.price}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <span>میلیون تومان</span>
        </div>
        <button className={styles.button} onClick={req}>
          ثبت
        </button>
      </div>
    </>
  );
}
