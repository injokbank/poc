import { Ctrl } from "./Ctrl";
import { Btn } from "../Btn";
import { Solid } from "../Solid";

export default {
  title: "Components/Ctrl",
  component: Ctrl,
  argTypes: {
    horiResizing: {
      options: ["fill", "hug", "fixed"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showSecBtn: false,
    horiResizing: "fill",
    className: {},
    solidBg: "posi",
    solidBtnTxt: "#btn_txt",
    solidGrade: "pri",
  },
};

export function twoBtn() {
  const count = "2",
    horiResizing = "fill",
    solidBg = "posi",
    solidBtnTxt = "이체하기",
    solidGrade = "sec";

  return (
    <Ctrl className="ctrl-instance">
      <Btn bg={solidBg} btnTxt={solidBtnTxt} className={"class-5"} elementBtnIcoTxtClassName={"class-3"} grade={solidGrade} showIco="off" size="medium" state="default" />
      <Btn bg={solidBg} btnTxt={solidBtnTxt} className={"class-5"} elementBtnIcoTxtClassName={"class-3"} grade={solidGrade} showIco="off" size="medium" state="default" />

      {/* <Btn
        bg={horiResizing === "fill" ? solidBg : "posi"}
        btnTxt={horiResizing === "fill" ? solidBtnTxt : "#btn_txt"}
        className={`${horiResizing === "fixed" && "class-4"} ${horiResizing === "fill" && "class-5"}`}
        elementBtnIcoTxtClassName={`${horiResizing === "fixed" && "class-3"}`}
        grade={horiResizing === "fill" ? solidGrade : "pri"}
        showIco="off"
        size="medium"
        state="default"
      /> */}
    </Ctrl>
  );
}
twoBtn.story = {
  name: "Button Group with two buttons.",
};
