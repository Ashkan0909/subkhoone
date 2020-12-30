import React, { useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/modal.module.css";

export default function PrimaryMarket({ assetId, marketId }) {
  const [value, setValue] = useState({ price: 0, number_of_shares: 0 });
  const req = () => {
    const url = `https://api.subkhoone.com/api/assets/${assetId}/primary_markets/${marketId}/primary_offers`;
    axios
      .post(url, {
        primary_offer: {
          number_of_shares: value.number_of_shares,
          price: value.price,
        },
      })
      .then((res) => console.log(res));
  };
  // console.log(primary_offer);
  return (
    <>
      <div className={styles.modalHeader}>
        <span>ثبت پیشنهاد</span>
        <i className={`${styles.icon} r-hands-and-gestures`}></i>
      </div>
      <div>
        <div className={styles.middleBody}>مشخص کردن ارقام</div>
        <div className={styles.values}>
          <span>ثبت پیشنهاد</span>
          <input
            className={styles.input}
            value={value.number_of_shares}
            onChange={(e) =>
              setValue({ ...value, number_of_shares: Number(e.target.value) })
            }
          />
          <span>صاب به قیمت هر صاب</span>
          <input
            className={styles.input}
            value={value.price}
            onChange={(e) =>
              setValue({ ...value, price: Number(e.target.value) })
            }
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
