import React from "react";
import Layout from "../../components/Layout";
import GetAssets from "../../services/index";
import styles from "../../assets/styles/properties.module.css";
import Link from "next/link";

export default function PropertiesPage({ results }) {
  console.log(results.data);
  return (
    <Layout>
      <div className={styles.bodyContainer}>
        <h5 className={styles.subTitle}>فرصت های سرمایه گزاری</h5>
        <h3 className={styles.mainTitle}>فرصت های سرمایه گزاری</h3>
        <br />

        <div className={styles.orders}>
          {console.log(results)}
          {results.data.map((item) =>
            item.present_primary_market_id ? (
              <Link href={`/properties/${item.id}/primary`} key={item.id}>
                <div className={styles.container} key={item.id}>
                  <h3 className={styles.title}>{item.name} </h3>
                  <div className={styles.imgContainer}>
                    <span className={styles.marketType}>بازار اولیه</span>
                    <img
                      className={styles.img}
                      src={`https://api.subkhoone.com//${
                        item.images.main && item.images.main.original
                      }`}
                    />
                  </div>
                  <div className={styles.footTitle}>
                    <h5>نوع ملک</h5>
                  </div>
                </div>
              </Link>
            ) : null
          )}
          {results.data.map((item) =>
            item.present_secondary_market_id ? (
              <Link href={`/properties/${item.id}/secondary`} key={item.id}>
                <div className={styles.container} key={item.id}>
                  <h3 className={styles.title}>{item.name}</h3>
                  <div className={styles.imgContainer}>
                    <span className={styles.marketType}>بازار ثانویه</span>
                    <img
                      className={styles.img}
                      src={`https://api.subkhoone.com//${
                        item.images.main && item.images.main.original
                      }`}
                    />
                  </div>
                  <div className={styles.footTitle}>
                    <h5>نوع ملک</h5>
                  </div>
                </div>
              </Link>
            ) : null
          )}
          {results.data.map((item) =>
            item.present_exit_market_id ? (
              <Link href={`/properties/${item.id}/exit`} key={item.id}>
                <div className={styles.container}>
                  <h3 className={styles.title}>{item.name}</h3>
                  <div className={styles.imgContainer}>
                    <span className={styles.marketType}>بازار خروج</span>
                    <img
                      className={styles.img}
                      src={`https://api.subkhoone.com//${
                        item.images.main && item.images.main.original
                      }`}
                    />
                  </div>
                  <div className={styles.footTitle}>
                    <h5>نوع ملک</h5>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </Layout>
  );
}

PropertiesPage.getInitialProps = async (ctx) => {
  const url = "https://api.subkhoone.com/api/assets";
  const res = await GetAssets({ url: url });
  return { results: res.data };
};
