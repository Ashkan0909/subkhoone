import React, { useState } from "react";
import GetAssets from "../../../services/index";
import Modal from "react-modal";
import PrimaryMarket from "../../../components/Offers/primaryMarket";
import SecondaryMarket from "../../../components/Offers/secondaryMarket";
import ExitMarket from "../../../components/Offers/exitMarket";
import Layout from "../../../components/Layout";
import styles from "../../../assets/styles/type.module.css";
import moment from "moment-jalaali";
export default function Type(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  console.log(props.results);
  console.log(props.ash);

  if (props.ash.type == "primary") {
    return (
      <>
        <Layout>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.all_number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کل صاب</span>
                  <i className={`${styles.icon} r-clock`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.smallest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین صاب خریداری شده</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.largest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>بیشترین صاب خریداری شده</span>
                  <i className={`${styles.icon} r-clockloop`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.number_of_contributors}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد کشارکت کننده ها</span>
                  <i className={`${styles.icon} r-statistical`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین قیمت قابل پیشنهاد</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span className={styles.values}>
                  {moment(
                    props.results.data.present_primary_market.start_date_time
                  ).format("jYYYY/jM/jD")}
                </span>
                <div className={styles.stateInfo}>
                  <span>تاریخ شروع فروش</span>
                  <i className="r-men"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span className={styles.values}>{`${moment(
                  props.results.data.present_primary_market.end_date_time
                ).diff(
                  moment(
                    props.results.data.present_primary_market.start_date_time
                  ),
                  "days"
                )}روز
                ${moment(
                  props.results.data.present_primary_market.end_date_time
                ).diff(
                  moment(
                    props.results.data.present_primary_market.start_date_time
                  ),
                  "hours"
                )}ساعت`}</span>
                <div className={styles.stateInfo}>
                  <span>زمان اتمام فروش</span>
                  <i className={`${styles.icon} r-men`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>سهم من از ملک</span>
                  <i className={`${styles.icon} r-money-dollar-badge`}></i>
                </div>
              </div>
              <br />
              <button
                className={styles.modalButton}
                onClick={setModalIsOpenToTrue}
              >
                ثبت پیشنهاد خرید
              </button>
              <Modal isOpen={modalIsOpen} className={styles.modalBody}>
                <button
                  className={`${styles.modalCloseButton} r-cancel`}
                  onClick={setModalIsOpenToFalse}
                >
                  {/* <i className={`${styles.modalCloseButton} r-cancel`}></i> */}
                </button>
                <PrimaryMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_primary_market.id}
                />
              </Modal>
            </div>
            <div>
              <img
                className={styles.img}
                src={`https://api.subkhoone.com//${props.results.data.images.main.original}`}
              />
            </div>
          </div>
        </Layout>
      </>
    );
  }
  if (props.ash.type == "secondary") {
    return (
      <>
        <Layout>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.subInfo}>
                <span className={styles.values}>
                  {moment(
                    props.results.data.present_secondary_market.start_date_time
                  ).format("jYYYY/jM/jD")}{" "}
                </span>
                <div className={styles.stateInfo}>
                  <span>شروع دوره سرمایه گذاری</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.all_number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>نوع ملک</span>
                  <i className="r-clock"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span className={styles.values}>
                  {moment(
                    props.results.data.present_secondary_market.end_date_time
                  ).format("jYYYY/jM/jD")}
                </span>
                <div className={styles.stateInfo}>
                  <span>تاریخ پایان سرمایه گذاری</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span className={styles.values}>
                  {moment(
                    props.results.data.present_secondary_market.end_date_time
                  ).diff(
                    moment(
                      props.results.data.present_secondary_market.end_date_time
                    ),
                    "days"
                  )}
                </span>
                <div className={styles.stateInfo}>
                  <span>مدت باقی مانده</span>
                  <i className={`${styles.icon} r-clockloop`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.number_of_contributors}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد کل صاب</span>
                  <i className={`${styles.icon} r-statistical`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد سرمایه گذاران تا به الان</span>
                  <i className={`${styles.icon} r-men`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین قیمت قابل پیشنهاد برای خرید</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.low_price}`}</span>

                <div className={styles.stateInfo}>
                  <span>بیشترین قیمت قابل پیشنهاد برای خرید</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین قیمت قابل پیشنهاد برای فروش</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>بیشترین قیمت قابل پیشنهاد برای فروش</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>سهم من از ملک</span>
                  <i className={`${styles.icon} r-men`}></i>
                </div>
              </div>
              <br />
              <button
                className={styles.modalButton}
                onClick={setModalIsOpenToTrue}
              >
                ثبت پیشنهاد خرید
              </button>
              <Modal isOpen={modalIsOpen} className={styles.modalBody}>
                <button
                  className={`${styles.modalCloseButton} r-cancel`}
                  onClick={setModalIsOpenToFalse}
                ></button>
                <SecondaryMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_secondary_market.id}
                />
              </Modal>
              <button>ثبت پیشنهاد فروش</button>
            </div>
            <img
              className={styles.img}
              src={`https://api.subkhoone.com//${props.results.data.images.main.original}`}
            />
          </div>
        </Layout>
      </>
    );
  }
  if (props.ash.type == "exit") {
    return (
      <>
        <Layout>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.all_number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کل صاب</span>
                  <i className={`${styles.icon} r-clock`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.smallest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین صاب خریداری شده</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.largest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>بیشترین صاب خریداری شده</span>
                  <i className={`${styles.icon} r-clockloop`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.number_of_contributors}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد کشارکت کننده ها</span>
                  <i className={`${styles.icon} r-statistical`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span className={styles.values}>
                  {moment(
                    props.results.data.present_exit_market.start_date_time
                  ).format("jYYYY/jM/jD")}
                </span>
                <div className={styles.stateInfo}>
                  <span>تاریخ شروع فروش</span>
                  <i className={`${styles.icon} r-men`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span className={styles.values}>{`${moment(
                  props.results.data.present_exit_market.end_date_time
                ).diff(
                  moment(
                    props.results.data.present_exit_market.start_date_time
                  ),
                  "days"
                )}روز
                  ${moment(
                    props.results.data.present_exit_market.end_date_time
                  ).diff(
                    moment(
                      props.results.data.present_exit_market.start_date_time
                    ),
                    "hours"
                  )}ساعت`}</span>
                <div className={styles.stateInfo}>
                  <span>زمان اتمام فروش</span>
                  <i className={`${styles.icon} r-men`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span
                  className={styles.values}
                >{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>سهم من از ملک</span>
                  <i className={`${styles.icon} r-money-dollar-badge`}></i>
                </div>
              </div>
              <br />
              <button
                className={styles.modalButton}
                onClick={setModalIsOpenToTrue}
              >
                ثبت پیشنهاد خرید
              </button>
              <Modal
                style={{ overlay: { background: "none" } }}
                // overlayClassName={styles.mmm}
                isOpen={modalIsOpen}
                className={styles.modalBody}
              >
                <button
                  className={`${styles.modalCloseButton} r-cancel`}
                  onClick={setModalIsOpenToFalse}
                ></button>
                <ExitMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_exit_market.id}
                />
              </Modal>
            </div>

            <img
              className={styles.img}
              src={`https://api.subkhoone.com//${props.results.data.images.main.original}`}
            />
          </div>
        </Layout>
      </>
    );
  }
}
Type.getInitialProps = async (ctx) => {
  const url = `https://api.subkhoone.com/api/assets/${ctx.query.id}`;
  const res = await GetAssets({ url: url });
  return { results: res.data, ash: ctx.query };
};
