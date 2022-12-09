import { useState } from "react";

export default function Overview({ trans }: any) {
  const sum = (trans: any) => {
    let resObj: any = {};

    trans.forEach((trans: any) => {
      const key = trans.symbol;
      if (resObj[key]) {
        resObj[key] = {
          symbol: key,
          amount: resObj[key].amount + trans.amount,
          total: resObj[key].total + trans.total,
        };
      } else {
        resObj[key] = {
          symbol: key,
          amount: trans.amount,
          total: trans.total,
        };
      }
    });

    return Object.values(resObj);
  };

  return (
    <>
      {sum(trans).map((transaction: any) => (
        <div key={transaction.symbol}>
          <Investment
            symbol={transaction.symbol}
            amount={transaction.amount}
            total={transaction.total}
          />
        </div>
      ))}
    </>
  );
}

function Investment(props: any) {
  const [expanded, setExpand] = useState(false);

  return (
    <div
      className="grid grid-cols-3 gap-y-4 place-items-center rounded-lg bg-green p-4 font-bold uppercase cursor-pointer"
      onClick={() => {
        expanded ? setExpand(false) : setExpand(true);
      }}
    >
      <div className="w-full flex items-center justify-around">
        <i
          className={`fa-solid ${
            expanded ? "fa-caret-down" : "fa-caret-right"
          } fa-2xl`}
        />
        <div>
          <InvestID text={"Ticker:"} />
          {props.symbol}
        </div>
      </div>

      <div>
        <InvestID text={"Amount:"} />
        {props.amount}
      </div>

      <div>
        <InvestID text={"Cost:"} />${parseFloat(props.total).toFixed(2)}
      </div>
    </div>
  );
}

function InvestID(props: any) {
  return <div className="text-base opacity-70">{props.text}</div>;
}
