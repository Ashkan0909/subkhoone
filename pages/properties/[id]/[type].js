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
            <img
              src={`https://api.subkhoone.com//${props.results.data.images.main.original}`}
            />
            <div>
              <div>
                <div>
                  <i className="r-clock"></i>
                  <span>کل صاب</span>
                </div>
                <span>{`صاب ${props.results.data.all_number_of_shares}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-calendar"></i>
                  <span>کمترین صاب خریداری شده</span>
                </div>
                <span>{`${props.results.data.smallest_shares}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-clockloop"></i>
                  <span>بیشترین صاب خریداری شده</span>
                </div>
                <span>{`${props.results.data.largest_shares}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-statistical"></i>
                  <span>تعداد کشارکت کننده ها</span>
                </div>
                <span>{`${props.results.data.number_of_contributors}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-calendar"></i>
                  <span>کمترین قیمت قابل پیشنهاد</span>
                </div>
                <span>{`${props.results.data.present_primary_market.low_price}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>تاریخ شروع فروش</span>
                </div>
                {/* <span>{`${moment(props.results)}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>زمان اتمام فروش</span>
                </div>
                {/* <span></span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-money-dollar-badge"></i>
                  <span>سهم من از ملک</span>
                </div>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
              </div>
              <br />
              <button onClick={setModalIsOpenToTrue}>ثبت پیشنهاد خرید</button>
              <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <PrimaryMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_primary_market.id}
                />
              </Modal>
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
            <img
              src={`https://api.subkhoone.com//${props.results.data.images.main.original}`}
            />
            <div>
              <div>
                <div>
                  <i className="r-calendar"></i>
                  <span>شروع دوره سرمایه گذاری</span>
                </div>
                {/* <span>{`${props.results.data.smallest_shares}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-clock"></i>
                  <span>نوع ملک</span>
                </div>
                {/* <span>{`صاب ${props.results.data.all_number_of_shares}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-calendar"></i>
                  <span>تاریخ پایان سرمایه گذاری</span>
                </div>
                {/* <span>{`${props.results.data.smallest_shares}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-clockloop"></i>
                  <span>مدت باقی مانده</span>
                </div>
                {/* <span>{`${props.results.data.largest_shares}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-statistical"></i>
                  <span>تعداد کل صاب</span>
                </div>
                {/* <span>{`${props.results.data.number_of_contributors}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-calendar"></i>
                  <span>تعداد سرمایه گذاران تا به الان</span>
                </div>
                {/* <span>{`${props.results.data.present_primary_market.low_price}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>کمترین قیمت قابل پیشنهاد برای خرید</span>
                </div>
                {/* <span>{`${moment(props.results)}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>بیشترین قیمت قابل پیشنهاد برای خرید</span>
                </div>
                {/* <span></span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-money-dollar-badge"></i>
                  <span>کمترین قیمت قابل پیشنهاد برای فروش</span>
                </div>
                {/* <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>بیشترین قیمت قابل پیشنهاد برای فروش</span>
                </div>
                {/* <span>{`${moment(props.results)}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>سهم من از ملک</span>
                </div>
                {/* <span>{`${moment(props.results)}`}</span> */}
              </div>
              <br />
              <button onClick={setModalIsOpenToTrue}>ثبت پیشنهاد خرید</button>
              <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <SecondaryMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_secondary_market.id}
                />
              </Modal>
              <button>ثبت پیشنهاد فروش</button>
            </div>
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
            <img
              src={`https://api.subkhoone.com//${props.results.data.images.main.original}`}
            />
            <div>
              <div>
                <div>
                  <i className="r-clock"></i>
                  <span>کل صاب</span>
                </div>
                <span>{`صاب ${props.results.data.all_number_of_shares}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-calendar"></i>
                  <span>کمترین صاب خریداری شده</span>
                </div>
                <span>{`${props.results.data.smallest_shares}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-clockloop"></i>
                  <span>بیشترین صاب خریداری شده</span>
                </div>
                <span>{`${props.results.data.largest_shares}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-statistical"></i>
                  <span>تعداد کشارکت کننده ها</span>
                </div>
                <span>{`${props.results.data.number_of_contributors}`}</span>
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>تاریخ شروع فروش</span>
                </div>
                {/* <span>{`${moment(props.results)}`}</span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-men"></i>
                  <span>زمان اتمام فروش</span>
                </div>
                {/* <span></span> */}
              </div>
              <br />
              <div>
                <div>
                  <i className="r-money-dollar-badge"></i>
                  <span>سهم من از ملک</span>
                </div>
                <span>{`${props.results.data.present_primary_market.number_of_shares}`}</span>
              </div>
              <br />
              <button onClick={setModalIsOpenToTrue}>ثبت پیشنهاد خرید</button>
              <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <ExitMarket
                  assetId={props.results.data.id}
                  marketId={props.results.data.present_exit_market.id}
                />
              </Modal>
            </div>
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
