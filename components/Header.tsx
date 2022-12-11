import Link from "next/link";
import { useState } from "react";

export default function Header(props: any) {
  const [pagesExpanded, setPageExpand] = useState(false);
  const [profileExpanded, setProfileExpand] = useState(false);

  return (
    <header className="top-0 w-full text-center text-black bg-green dark">
      <MainHeader
        pagesExpanded={pagesExpanded}
        profileExpanded={profileExpanded}
        setPageExpand={setPageExpand}
        setProfileExpand={setProfileExpand}
      />

      <SubPages expanded={pagesExpanded} />
      <ProfilePages expanded={profileExpanded} />
    </header>
  );
}

function MainHeader(props: any) {
  const pagesExpand = () => {
    props.pagesExpanded
      ? props.setPageExpand(false)
      : props.setPageExpand(true);

    if (props.profileExpanded && !props.pagesExpanded)
      props.setProfileExpand(false);
  };

  const profileExpand = () => {
    props.profileExpanded
      ? props.setProfileExpand(false)
      : props.setProfileExpand(true);

    if (props.pagesExpanded && !props.profileExpanded)
      props.setPageExpand(false);
  };

  return (
    <div
      className={`h-[75px] w-full z-10 bg-dark-green flex justify-between gap-6 font-semibold`}
    >
      <div className="h-full flex items-center gap-2 pl-6 text-xl">
        <div className="">Money Works |</div>
        <div className="uppercase">{props.currentPage}</div>
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
              props.pagesExpanded ? "fa-xmark text-4xl" : "fa-bars text-3xl"
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
}

function SubPages(props: any) {
  return (
    <div className={`${props.expanded ? "grid" : "hidden"} grid-cols-3`}>
      <Page icon={"fa-chart-pie"} href={"/investments"} text={"Investments"} />
      <Page icon={"fa-coins"} href={"/budget"} text={"Budget"} />
      <Page icon={"fa-wrench"} href={"/tools"} text={"Tools"} />
    </div>
  );
}

function ProfilePages(props: any) {
  return (
    <div className={`${props.expanded ? "grid" : "hidden"} grid-cols-2`}>
      <Page icon={"fa-user"} href={"/account"} text={"Account"} />
      <Page icon={"fa-gear"} href={"/settings"} text={"Settings"} />
    </div>
  );
}

function Page({ icon, href, text }: any) {
  return (
    <Link href={href}>
      <button className="w-full flex items-center justify-center gap-2 p-[0.75rem] font-bold uppercase bg-dark-green hover:bg-green">
        {text}
        <i className={`fa-solid ${icon}`} />
      </button>
    </Link>
  );
}
