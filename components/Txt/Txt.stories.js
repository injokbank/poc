import { Txt } from ".";

export default {
  title: "Components/Txt",
  component: Txt,
  argTypes: {
    grade: {
      options: ["ter", "sec", "pri"],
      control: { type: "select" },
    },
    level: {
      options: ["two", "one"],
      control: { type: "select" },
    },
    showIco: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    showUnderline: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    showPadding: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showPressed: false,
    btnTxt: "#btn_txt",
    showBtnTxt: true,
    grade: "ter",
    level: "two",
    showIco: "off",
    showUnderline: "off",
    showPadding: "off",
    state: "default",
    className: "",
    divClassName: "",
    underlineClassName: "",
  },
};
