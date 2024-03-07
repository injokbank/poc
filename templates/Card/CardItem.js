import React from "react";
const CardItem = ({ item, onClick }) => {
  //날짜 포맷팅 (20231101 -> 11.01)
  const toDateMd = (dateStr, gubun) => {
    const re = /(\d{2})(\d{2})/;
    const replace = "$1" + gubun + "$2";
    var dateStrNoDash = gubun === "." ? dateStr.substring(4, 8).replace(/[^\d]/g, "") : dateStr.substring(0, 4).replace(/[^\d]/g, "");
    return dateStrNoDash.replace(re, replace);
  };

  //금액 포맷팅 (70000 -> 70,000)
  const toMoney = (amt) => {
    amt = String(amt);
    const re = /(-?\d+)(\d{3})/;
    while (re.test(amt)) amt = amt.replace(re, "$1,$2");
    return amt;
  };

  return (
    <div className="list-item" data-pk={item.txAfBal} onClick={onClick}>
      <button type="button" className="section-tap">
        <div className="row-head">
          <div className="area-date">
            <span className="txt-date">{toDateMd(item.txDt, ".")}</span>
            <span className="txt-time">{toDateMd(item.txHms, ":")}</span>
          </div>
        </div>
        <div className="row-tit">
          <span className="txt-detail">{item.whdrwlPsbkCntnt}</span>
          <span className="txt-amount secondary1-1">
            <strong>{toMoney(Number(item.txAmt))}</strong> <strong>원</strong>
          </span>
        </div>
        <div className="row-state">
          <span className="txt-memo">
            <span className="txt">{item.txNm}</span>
          </span>
          <span className="txt-sum">
            잔액<em>{toMoney(Number(item.txAfBal))}</em> <strong>원</strong>
          </span>
        </div>
      </button>
    </div>
  );
};

export default CardItem;
