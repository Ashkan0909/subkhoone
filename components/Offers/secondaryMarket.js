import React, { useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/modal.module.css";
export default function SecondaryMarket({ assetId, marketId }) {
  const req = () => {
    const url = `https://api.subkhoone.com/api/assets/${assetId}/secondary_markets/${marketId}/secondary_buy_offers`;
    axios
      .post(url, {
        secondary_buy_offer: {
          number_of_shares: value.number_of_shares,
          price: Number(value.price),
          hidden_price: value.hidden_price,
        },
      })
      .then((res) => console.log(res));
  };
  const [value, setValue] = useState({
    number_of_shares: 0,
    price: 0,
    hidden_price: 0,
  });
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
        <div className={styles.values}>
          <span>ثبت پیشنهاد</span>
          <input
            className={styles.input}
            value={value.number_of_shares}
            onChange={(e) =>
              setValue({ ...value, number_of_shares: e.target.value })
            }
          />
          <span>صاب به قیمت هر صاب</span>
          <input
            className={styles.input}
            value={value.price}
            onChange={(e) => setValue({ ...value, price: e.target.value })}
          />
          <span>میلیون تومان</span>
          <div>
            <span>قیمت نهان: هر صاب</span>
            <input
              className={styles.input}
              value={value.hidden_price}
              onChange={(e) =>
                setValue({ ...value, hidden_price: e.target.value })
              }
            />
            <span>
              میلیون تومان(این قیمت به صورت محرمانه تا زمان پایان بازار ثانویه
              محفوظ می ماند)
            </span>
          </div>
        </div>
        <button className={styles.button} onClick={req}>
          ثبت
        </button>
      </div>
    </>
  );
}
