import Link from "next/link";
import React from "react";
//import navStyles from "../styles/Nav.module.css";
import { useRouter } from "next/router.js";
import { Ico } from "@/components/Ico";
import { Txt } from "@/components/Txt";
import { LineChevronLeft1 } from "@/icons/LineChevronLeft1";
const AppNav = ({ title }) => {
  const router = useRouter();

  return (
    <div className="header">
      <div className="left">
        <Ico icon={<LineChevronLeft1 className="line-chevron-left" />} shape="transparent" size="medium" state="default" />
      </div>
      <div className="title">{title}</div>
      <div className="right">
        <Txt btnTxt="버튼명" className="txt-instance" contentsClassName="design-component-instance-node" grade="pri" level="one" showIco="off" showPadding="on" showUnderline="off" state="default" />
      </div>
    </div>
    // <nav className={navStyles.nav}>
    //   <div id="header" className="is-fix">
    //     <div className="header-wrap">
    //       <div className="header">
    //         <div className="mweb-main-logo">
    //           <Link href="/" className="logo">
    //             <span className="hidden">kbank</span>
    //           </Link>
    //         </div>
    //         <div className="mweb-main-gnb">
    //           <ul>
    //             <li>
    //               <Link href="/test" className={router.pathname == "/test" ? "on" : ""}>
    //                 TEST
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default AppNav;
