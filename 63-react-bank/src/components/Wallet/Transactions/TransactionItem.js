import React, { useState } from "react";

const TransactionItem = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className={detailsVisible ? "selected" : null}>
      <div
        onClick={() => {
          if (props.detailsExpandable) {
            setDetailsVisible(!detailsVisible);
          }
        }}
        className={!detailsVisible ? "item_wrapper item_hover" : "item_wrapper"}
      >
        <div className="item_name">
          {props.transaction.title}
          {props.dateVisible ? (
            <p className="item_date">{props.transaction.date}</p>
          ) : (
            ""
          )}
        </div>
        <p className="item_price">{`£${props.transaction.amount}`}</p>
      </div>
      {detailsVisible ? (
        <>
          <div className="hr_line"></div>
          <div className="transaction_details">
            <p>{props.transaction.date}</p>
            <p>{props.transaction.details}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TransactionItem;
