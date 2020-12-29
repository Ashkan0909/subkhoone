import React, { useState } from "react";
import GetAssets from "../../../services/index";
import Modal from "react-modal";
import PrimaryMarket from "../../../components/Offers/primaryMarket";
import SecondaryMarket from "../../../components/Offers/secondaryMarket";
import ExitMarket from "../../../components/Offers/exitMarket";
import Layout from "../../../components/Layout";
import styles from "../../../assets/styles/type.module.css";
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
                {/* <span>صاب</span> */}
                <span>{`${props.results.data.all_number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کل صاب</span>
                  <i className={`${styles.icon} r-clock`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.smallest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین صاب خریداری شده</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.largest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>بیشترین صاب خریداری شده</span>
                  <i className={`${styles.icon} r-clockloop`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.number_of_contributors}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد کشارکت کننده ها</span>
                  <i className={`${styles.icon} r-statistical`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین قیمت قابل پیشنهاد</span>
                  <i className={`${styles.icon} r-calendar`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>تاریخ شروع فروش</span>
                  <i className="r-men"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>زمان اتمام فروش</span>
                  <i className={`${styles.icon} r-men`}></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>سهم من از ملک</span>
                  <i className={`${styles.icon} r-money-dollar-badge`}></i>
                </div>
              </div>
              <br />
              <button onClick={setModalIsOpenToTrue}>ثبت پیشنهاد خرید</button>
              <Modal isOpen={modalIsOpen} className={styles.modalBody}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <PrimaryMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_primary_market.id}
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
  if (props.ash.type == "secondary") {
    return (
      <>
        <Layout>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>شروع دوره سرمایه گذاری</span>
                  <i className="r-calendar"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.all_number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>نوع ملک</span>
                  <i className="r-clock"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.smallest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>تاریخ پایان سرمایه گذاری</span>
                  <i className="r-calendar"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.largest_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>مدت باقی مانده</span>
                  <i className="r-clockloop"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.number_of_contributors}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد کل صاب</span>
                  <i className="r-statistical"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>تعداد سرمایه گذاران تا به الان</span>
                  <i className="r-calendar"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین قیمت قابل پیشنهاد برای خرید</span>
                  <i className="r-men"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>

                <div className={styles.stateInfo}>
                  <span>بیشترین قیمت قابل پیشنهاد برای خرید</span>
                  <i className="r-men"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>کمترین قیمت قابل پیشنهاد برای فروش</span>
                  <i className="r-money-dollar-badge"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>بیشترین قیمت قابل پیشنهاد برای فروش</span>
                  <i className="r-men"></i>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div className={styles.stateInfo}>
                  <span>سهم من از ملک</span>
                  <i className="r-men"></i>
                </div>
              </div>
              <br />
              <button onClick={setModalIsOpenToTrue}>ثبت پیشنهاد خرید</button>
              <Modal isOpen={modalIsOpen} className={styles.modalBody}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <SecondaryMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_secondary_market.id}
                />
              </Modal>
              <button>ثبت پیشنهاد فروش</button>
            </div>
            <img
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
                <span>{`صاب ${props.results.data.all_number_of_shares}`}</span>
                <div>
                  <i className="r-clock"></i>
                  <span>کل صاب</span>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.smallest_shares}`}</span>
                <div>
                  <i className="r-calendar"></i>
                  <span>کمترین صاب خریداری شده</span>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.largest_shares}`}</span>
                <div>
                  <i className="r-clockloop"></i>
                  <span>بیشترین صاب خریداری شده</span>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.number_of_contributors}`}</span>
                <div>
                  <i className="r-statistical"></i>
                  <span>تعداد کشارکت کننده ها</span>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                {/* <span>{`${moment(props.results)}`}</span> */}
                <div>
                  <i className="r-men"></i>
                  <span>تاریخ شروع فروش</span>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                {/* <span></span> */}
                <div>
                  <i className="r-men"></i>
                  <span>زمان اتمام فروش</span>
                </div>
              </div>
              <br />
              <div className={styles.subInfo}>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
                <div>
                  <i className="r-money-dollar-badge"></i>
                  <span>سهم من از ملک</span>
                </div>
              </div>
              <br />
              <button onClick={setModalIsOpenToTrue}>ثبت پیشنهاد خرید</button>
              <Modal isOpen={modalIsOpen} className={styles.modalBody}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <ExitMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_exit_market.id}
                />
              </Modal>
            </div>

            <img
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
