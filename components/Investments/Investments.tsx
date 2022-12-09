import { useState } from "react";
import Overview from "./Tabs/Overview";
import Transactions from "./Tabs/Transactions";

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
        {currentTab === "transactions" ? (
          <Transactions trans={trans} />
        ) : (
          <Overview trans={trans} />
        )}
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
