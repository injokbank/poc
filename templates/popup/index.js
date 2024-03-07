// Popup.js
import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import styles from "./styles.module.css";
const Popup = ({ isOpen, onClose, item }) => {
  const controls = useAnimation();
  const popupVariants = {
    hidden: { y: 100, opacity: 0 }, // 초기 상태: 아래로 숨겨져 있음
    visible: { y: 0, opacity: 1 }, // 최종 상태: 위로 올라오며 나타남
  };

  const popupTransition = {
    duration: 0.2, // 애니메이션 지속 시간 (초)
    ease: "easeIn", // 이징 함수, 필요에 따라 수정 가능
  };
  return (
    <>
      <motion.div
        className={styles["bottom-sheet-overlay"]}
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: isOpen ? 1 : 0 }}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={popupVariants}
        transition={popupTransition}
      >
        <div className={styles["bottom-sheet"]} onClick={onClose}>
          <button className={styles["close-button"]} onClick={onClose}>
            닫기
          </button>
          <div className={styles["popup-content"]}>
            <div className="component-list-infobox">
              <div className="list-infobox-group">
                <ul className="list-row">
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">거래일시</dt>
                      <dd className="area-desc">
                        {item.txDt} {item.txHms}
                      </dd>
                    </dl>
                  </li>
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">거래구분</dt>
                      <dd className="area-desc">{item.whdrwlPsbkCntnt}</dd>
                    </dl>
                  </li>
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">거래금액</dt>
                      <dd className="area-desc">{Number(item.txAmt)}원</dd>
                    </dl>
                  </li>
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">계좌잔액</dt>
                      <dd className="area-desc">{Number(item.txAfBal)}원</dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
    // <motion.div className="popup" variants={popupVariants} initial="hidden" animate={isOpen ? "visible" : "hidden"}>
    //    <div className={styles["popup-overlay"]}>
    //     <div className={styles["popup-container"]}>
    //       <button className={styles["close-button"]} onClick={onClose}>
    //         닫기
    //       </button>
    //       <div className={styles["popup-content"]}>
    //         <p>안녕하세요! 이것은 팝업입니다.</p>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default Popup;
