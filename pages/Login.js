import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../assets/styles/Home.module.css";
import { attachJwt, constants } from "../services/index";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Login() {
  const router = useRouter();
  const [Name, setName] = useState({ first_name: "", last_name: "" });
  const [value, setValue] = useState({
    phone_number: "",
    password: "",
    temp_token: "",
  });
  useEffect(() => {
    console.log(Name);
  }, [Name]);
  useEffect(() => {
    console.log(value);
  }, [value]);
  const [FORM, setFORM] = useState("form1"); //checks the from
  const handleClick = (e) => {
    e.preventDefault();
    setFORM("form2");
    console.log(FORM);
    axios
      .post("https://api.subkhoone.com/api/users/one_time_password/new", value)
      .then(function (response) {
        console.log(value);
        setValue({ ...value, temp_token: response.data.data.temp_token });
        console.log(value);
      })

      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFORM("form3");
    console.log(FORM);
    console.log(value);
    axios
      .post(
        "https://api.subkhoone.com/api/users/one_time_password/login",
        value
      )
      .then(function (response) {
        console.log(response.data.data.jwt_token);
        localStorage.jwt_token = response.data.data.jwt_token;
        attachJwt(response.data.data.jwt_token);
      });
  };
  return (
    <Layout>
      <div className={styles.Body}>
        <form>
          <h1>Login</h1>
          <h4>Please insert correct words</h4>
          {FORM === "form1" ? (
            <>
              <img id="image" />
              <div>
                <label className={styles.Label}>Phone Number</label>
                <br />

                <input
                  className={styles.Input}
                  name="phone_number"
                  type="text"
                  // value={`+${9334430909}`}
                  required
                  onChange={(e) =>
                    setValue({ ...value, phone_number: e.target.value })
                  }
                ></input>
              </div>
              <br />
              <button
                className={styles.Button}
                type="submit"
                onClick={handleClick}
              >
                Get code
              </button>
            </>
          ) : null}
          {FORM === "form2" ? (
            <>
              <div>
                <label className={styles.Label}>Password</label>
                <input
                  className={styles.Input}
                  name="password"
                  value={value.password}
                  type="text"
                  required
                  onChange={(e) =>
                    setValue({ ...value, password: e.target.value })
                  }
                ></input>
                <br />
              </div>
              <button
                className={styles.Button}
                type="submit"
                onClick={handleSubmit}
              >
                Send code
              </button>
            </>
          ) : null}
          {FORM === "form3" ? (
            <>
              <div>
                <label className={styles.Label}>FirstName</label>
                <input
                  className={styles.Input}
                  name="fname"
                  type="text"
                  required
                  onChange={(e) =>
                    setName({ ...Name, first_name: e.target.value })
                  }
                ></input>
                <br />
                <label className={styles.Label}>LastName</label>
                <input
                  className={styles.Input}
                  name="lname"
                  type="text"
                  required
                  onChange={(e) =>
                    setName({ ...Name, last_name: e.target.value })
                  }
                ></input>
                <br />
              </div>
              <button
                className={styles.Button}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                  axios.put("https://api.subkhoone.com/api/users/my/update", {
                    user: {
                      first_name: Name.first_name,
                      last_name: Name.last_name,
                    },
                  });
                }}
              >
                Submit fName and lName
              </button>
            </>
          ) : null}
        </form>
      </div>
    </Layout>
  );
}
