import React, { cloneElement, createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ModalContext = createContext();

const Modal = ({ children, item, open, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  //   const open = () => {
  //     setIsOpen(!isOpen);
  //   };

  const value = { item, isOpen, open, onClick };
  const dynamicStyles = {
    opacity: open ? 1 : 1,
    display: open ? "flex" : "flex",
  };

  const popupVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <ModalContext.Provider value={value}>
      <motion.div className="popup" variants={popupVariants} animate={open ? "visible" : "hidden"}>
        <div className="popup-wrap">
          {/* <div className="kbank-popup-PBKINQ1100000100S_P03 popup-dialog ui-popup ui-full" style={dynamicStyles}>
            <div className="popup-section"> */}
          <div className="popup-group">{children}</div>
          {/* </div>
          </div> */}
        </div>
      </motion.div>
    </ModalContext.Provider>
  );
};

const Content = ({ children }) => {
  const { item, isOpen } = useContext(ModalContext);
  return (
    <div className="popup-content">
      <div className="popup-inner">
        <div className="component-text-complex">
          <div className="prodname-group">
            <div className="prodname-tit">
              <div className="prodname-tit-field">{item.memo}</div>
            </div>
            <div className="prodname-txt">
              <p className="txt-lv03">메모입력</p>
              <a href="#none" className="prodname-link-edit">
                <i aria-hidden="true" className="ico-edit"></i>
                {/* <span className="hide-txt">수정</span> */}
              </a>
            </div>
          </div>
        </div>
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
  );
};

const Header = ({ children }) => {
  const { open } = useContext(ModalContext);
  useEffect(() => {
    //Header 없애줌
    //        document.querySelector('#header').style = 'z-index:1';
  }, []);

  return (
    <div className="popup-header">
      <h1 className="tit-head">
        <span className="hide-txt">내역상세</span>
      </h1>
      {children}
    </div>
  );
};

const Close = ({ children }) => {
  const { open, onClick } = useContext(ModalContext);
  return (
    <button
      type="button"
      className="btn-popup-close"
      onClick={() => {
        onClick(!open);
      }}
    >
      <i aria-hidden="true" className="ico-close-popup"></i>
    </button>
  );
};

const Open = ({ children }) => {
  const { open, isOpen } = useContext(ModalContext);
  return !isOpen && cloneElement(children, { onClick: onClick(!isOpen) });
};

//module export
Modal.Content = Content;
Modal.Header = Header;
Modal.Close = Close;
Modal.Open = Open;

export default Modal;
