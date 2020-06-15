export const getBalance = () => {
  return {
    balance: 3830.21,
    date: Date.now().toLocaleString(),
  };
};

export const getSavingsBalance = () => {
  return {
    balance: 7345.78,
    date: Date.now().toLocaleString(),
  };
};

export const getTransactions = () => {
  return [
    {
      date: "2020/06/13 - 17:05",
      title: "Lidl",
      details: "grocery shopping",
      amount: 23.45,
    },
    {
      date: "2020/06/09 - 12:34",
      title: "John Lewis",
      details: "shopping",
      amount: 133.2,
    },
    {
      date: "2020/06/01 - 19:08",
      title: "Pizza Pilgrims",
      details: "eating out",
      amount: 48.7,
    },
    {
      date: "2020/05/11 - 14:08",
      title: "Tesco",
      details: "grocery shopping",
      amount: 89.47,
    },
    {
      date: "2020/04/29 - 22.38",
      title: "Amazon UK",
      details: "shopping",
      amount: 76.89,
    },
    {
      date: "2020/06/14 - 11:49",
      title: "Royal Mail",
      details: "post",
      amount: 3.9,
    },
    {
      date: "2020/06/04 - 20:58",
      title: "Marks & Spencer",
      details: "grocery shopping",
      amount: 45.42,
    },
    {
      date: "2020/05/23 - 15:23",
      title: "Starbucks",
      details: "eating out",
      amount: 13.45,
    },
    {
      date: "2020/06/13 - 16:33",
      title: "Coders In Hoods",
      details: "50% refund",
      amount: 998.5,
    },
    {
      date: "2020/06/03 - 16:53",
      title: "Ebay",
      details: "refund",
      amount: 25.7,
    },
  ];
};
