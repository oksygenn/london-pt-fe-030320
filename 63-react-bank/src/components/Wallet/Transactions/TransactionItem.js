import React, { useState } from "react";

const TransactionItem = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setDetailsVisible(!detailsVisible);
        }}
        className="item_wrapper"
      >
        <p className="item_name">Marks &amp; Spencer</p>
        <p className="item_price">-£8.64</p>
      </div>
      {detailsVisible ? <div>Hello World</div> : ""}
    </>
  );
};

export default TransactionItem;
