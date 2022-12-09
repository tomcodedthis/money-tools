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
      className="grid grid-cols-[50px_repeat(5,1fr)] gap-y-4 place-items-center rounded-lg bg-green p-4 font-bold uppercase cursor-pointer"
      onClick={() => {
        expanded ? setExpand(false) : setExpand(true);
      }}
    >
      <div className="w-full flex pl-2">
        <i
          className={`fa-solid ${
            expanded ? "fa-caret-down" : "fa-caret-right"
          } fa-2xl justify-self-start`}
        />
      </div>

      <div className="w-full border-x-4 border-dark-green">
        <TransID text={"Type:"} />
        {props.type}
      </div>

      <div className="w-full border-r-4 border-dark-green">
        <TransID text={"Ticker:"} />
        {props.symbol}
      </div>

      <div className="w-full border-r-4 border-dark-green">
        <TransID text={"Price:"} />${parseFloat(props.price).toFixed(2)}
      </div>

      <div className="w-full border-r-4 border-dark-green">
        <TransID text={"Amount:"} />
        {props.amount}
      </div>

      <div className="w-full">
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
