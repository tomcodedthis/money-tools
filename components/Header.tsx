import { useState } from "react";

export default function Header(props: any) {
  const [pagesExpanded, setPageExpand] = useState(false);
  const [profileExpanded, setProfileExpand] = useState(false);

  const pagesExpand = () => {
    if (pagesExpanded) {
      setPageExpand(false);
    } else {
      if (profileExpanded) setProfileExpand(false);
      setPageExpand(true);
    }
  };

  const profileExpand = () => {
    if (profileExpanded) {
      setProfileExpand(false);
    } else {
      if (pagesExpanded) setPageExpand(false);
      setProfileExpand(true);
    }
  };

  return (
    <div className="abosolute top-0">
      <div
        className={`h-[75px] w-full z-10 bg-dark-green flex justify-between gap-6 font-semibold`}
      >
        <div className="h-full flex items-center gap-2 pl-6 text-xl">
          <div className="">MoneyWorks |</div>
          <div className=" uppercase">{props.currentPage}</div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <button
            className="h-full py-4 px-6 hover:bg-green"
            onClick={profileExpand}
          >
            <i className={`fa-solid fa-circle-user fa-2xl`}></i>
          </button>

          <button
            className="h-full py-4 px-6 hover:bg-green"
            onClick={pagesExpand}
          >
            <i
              className={`fa-solid ${
                pagesExpanded ? "fa-xmark text-4xl" : "fa-bars text-3xl"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <SubPages expanded={pagesExpanded} />
      <ProfilePages expanded={profileExpanded} />
    </div>
  );
}

function SubPages(props: any) {
  return (
    <div className={`${props.expanded ? "grid" : "hidden"} grid-cols-3`}>
      <SubPage text={"Investments"} />
      <SubPage text={"Budget"} />
      <SubPage text={"Tools"} />
    </div>
  );
}

function ProfilePages(props: any) {
  return (
    <div className={`${props.expanded ? "grid" : "hidden"} grid-cols-2`}>
      <SubPage text={"Account"} />
      <SubPage text={"Settings"} />
    </div>
  );
}

function SubPage(props: any) {
  return (
    <button className="p-[0.75rem] font-bold uppercase bg-dark-green hover:bg-green">
      {props.text}
    </button>
  );
}
