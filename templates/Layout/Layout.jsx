import { deviceState, scrollState } from "@/recoil/global";
import { useRecoilState } from "recoil";
import AppNav from "../AppNav";
import Nav from "../Nav";
import { useEffect, useState } from "react";
export const Layout = ({ children }) => {
    const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
    const [proudctScrolling, setProudctScrolling] = useRecoilState(scrollState);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        let scrollTop = window.scrollY;
        setScrolling(scrollTop > 100); // Adjust the value based on when you want the header to change
        setProudctScrolling(scrollTop > 314);
        // console.log(`scroll ........... : ` + proudctScrolling + ` ` + scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

return (
    <>
      {/* TODO title 동적으로 받아서 보여줘야 함. */}
      {lDeviceState === "APP" ? <AppNav title={"이건초기모임세팅"} /> : lDeviceState === "MW" ? <Nav /> : ""}
        <div>{children}</div>
    </>
    );
};
