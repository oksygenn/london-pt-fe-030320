import React, { useState } from "react";

const TransactionItem = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className={detailsVisible ? "selected" : ""}>
      <div
        onClick={() => {
          setDetailsVisible(!detailsVisible);
        }}
        className={!detailsVisible ? "item_wrapper item_hover" : "item_wrapper"}
      >
        <p className="item_name">{props.transaction.title}</p>
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
