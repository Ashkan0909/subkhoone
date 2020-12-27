import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout";

export default function PrimaryMarket({ assetId, marketId }) {
  const [value, setValue] = useState();
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
      <div className="styles.modalHeader">
        <div>
          <i className="r-hands-and-gestures"></i>
          <span>ثبت پیشنهاد</span>
        </div>
        <span>x</span>
      </div>
      <div className="styles.modalBody">
        <div>مشخص کردن ارقام</div>

        <span>ثبت پیشنهاد</span>
        <input
          onChange={(e) =>
            setValue({ ...value, number_of_shares: Number(e.target.value) })
          }
        />
        <span>صاب به قیمت هر صاب</span>
        <input
          onChange={(e) =>
            setValue({ ...value, price: Number(e.target.value) })
          }
        />
        <span>میلیون تومان</span>

        <button onClick={req}>ثبت</button>
      </div>
    </>
  );
}
