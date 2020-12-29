import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { attachJwt } from "../services/index";
import { fetcher, isLoggedIn } from "../services/index";
import styles from "../assets/styles/Header.module.css";
export default function Header() {
  const router = useRouter();

  const { data: results, error } = useSWR(
    "https://api.subkhoone.com/api/users/my",
    fetcher
  );
  if (!results) {
    console.log("waiting");
  }
  return (
    <div>
      <div className={styles.header}>
        <div>
          <button className={styles.Melk}>ملک خود را ثبت کنید</button>
        </div>
        <div className={styles.icon}>
          <div className={styles.info}>
            {results && results.data.data.first_name}{" "}
            {results && results.data.data.last_name}
            <br />
            {/* {results && results.data.data.first_name} */}
            {results && results.data.data.balance}
            {/* {results && console.log(results.data)} */}
          </div>
          {console.log(results && results.data)}
          <div className={styles.person}>
            {console.log(isLoggedIn())}
            {isLoggedIn() ? (
              <img
                className={styles.personImg}
                src={
                  results &&
                  `https://api.subkhoone.com/${results.data.data.image_url}`
                }
              />
            ) : (
              <div
                className="r-person"
                onClick={() => router.push("/Login")}
              ></div>
            )}
            <span className={`${styles.search} r-search1`}></span>
          </div>
        </div>
        <ul className={styles.ulHeader}>
          <button className={styles.Button}>تماس باما</button>
          <button className={styles.Button}>درباره ما</button>
          <button className={styles.Button}>چراما</button>
          <button
            className={styles.Button}
            onClick={() => router.push("/properties")}
          >
            املاک
          </button>
          <button className={styles.Button} onClick={() => router.push("/")}>
            خانه
          </button>
        </ul>
        <div className={styles.logo}>
          <img src="https://subkhoone.com/logo.svg" />
        </div>
      </div>
    </div>
  );
}
