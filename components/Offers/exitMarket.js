import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout";
export default function ExitMarket({ assetId, marketId }) {
  const req = () => {
    const url = `https://api.subkhoone.com/api/assets/${assetId}/exit_markets/${marketId}/exit_market_offers`;
    // const url = `https://api.subkhoone.com/api/assets/615890603958042625/exit_markets/616442209247297537/exit_market_offers`;
    axios
      .post(url, {
        exit_market_offer: {
          price: price,
        },
      })
      .then((res) => console.log(res));
  };
  const [price, setValue] = useState(0);
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
        {console.log(price)}
        <span>ثبت پیشنهاد خرید این ملک به قیمت هر صاب</span>
        <input onChange={(e) => setValue(Number(e.target.value))} />
        <span>میلیون تومان</span>

        <button onClick={req}>ثبت</button>
      </div>
    </>
  );
}
