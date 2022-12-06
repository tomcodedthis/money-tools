import { useState } from "react";

export default function Transactions({ trans }: any) {
  return (
    <>
      {trans.slice(0, 20).map((transaction: any) => (
        <div key={transaction.date}>
          <Transaction
            type={transaction.transaction_code}
            symbol={transaction.symbol}
            price={transaction.price}
            amount={transaction.amount}
            total={transaction.total}
            date={new Date(transaction.date)}
          />
        </div>
      ))}
    </>
  );
}

function Transaction(props: any) {
  const [expanded, setExpand] = useState(false);

  return (
    <div
      className="grid grid-cols-5 gap-y-4 place-items-center rounded-lg bg-green p-4 font-bold uppercase cursor-pointer"
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
        <div className="">
          <TransID text={"Type:"} />
          {props.type}
        </div>
      </div>

      <div>
        <TransID text={"Ticker:"} />
        {props.symbol}
      </div>

      <div>
        <TransID text={"Price:"} />${parseFloat(props.price).toFixed(2)}
      </div>

      <div>
        <TransID text={"Amount:"} />
        {props.amount}
      </div>

      <div>
        <TransID text={"Cost:"} />${parseFloat(props.total).toFixed(2)}
      </div>

      <div className={`${expanded ? "block" : "hidden"} col-span-full`}>
        <div className="text-base opacity-70">Date:</div>
        <div className="flex gap-2">
          <div>{props.date.toLocaleTimeString()}</div>
          <div>{props.date.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}

function TransID(props: any) {
  return <div className="text-base opacity-70">{props.text}</div>;
}
