import { useState } from "react";

export default function Investments({ trans }: any) {
  const [currentTab, setCurrentTab] = useState("transactions");

  return (
    <div className="h-full flex flex-col text-base font-semiold">
      <div className="flex gap-2">
        <TabBtn
          text={"overview"}
          currentTab={currentTab}
          setTab={() => {
            setCurrentTab("overview");
          }}
        />
        <TabBtn
          text={"transactions"}
          currentTab={currentTab}
          setTab={() => {
            setCurrentTab("transactions");
          }}
        />
      </div>

      <div
        className={`overflow-auto flex flex-col gap-4 bg-dark-green font-semiold p-2 border-[1.2rem] border-dark-green ${
          currentTab === "overview" ? "rounded-tl-none" : "rounded-tl-lg"
        } rounded-lg`}
      >
        {trans.slice(0, 20).map((transaction: any) => (
          <div key={transaction.date}>
            <Investment
              type={transaction.transaction_code}
              symbol={transaction.symbol}
              price={transaction.price}
              amount={transaction.amount}
              total={transaction.total}
              date={new Date(transaction.date)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TabBtn(props: any) {
  return (
    <button
      className={`${
        props.currentTab === props.text ? "bg-dark-green" : "bg-green"
      } w-fit py-2 px-6 uppercase rounded-t-lg`}
      onClick={props.setTab}
    >
      {props.text}
    </button>
  );
}

function Investment(props: any) {
  const [expanded, setExpand] = useState(false);

  return (
    <div
      className="grid grid-cols-5 gap-y-4 place-items-center rounded-lg bg-green p-4 font-bold uppercase cursor-pointer"
      onClick={() => {
        expanded ? setExpand(false) : setExpand(true);
      }}
    >
      <div className="flex items-center gap-8">
        <i
          className={`fa-solid ${
            expanded ? "fa-caret-down" : "fa-caret-right"
          } fa-lg`}
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
