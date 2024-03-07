import { Solid } from ".";

export default {
  title: "Components/Solid",
  component: Solid,
  argTypes: {
    bg: {
      options: ["nega", "posi", 203949],
      control: { type: "select" },
    },
    grade: {
      options: ["ter", "sec", "pri"],
      control: { type: "select" },
    },
    showIco: {
      options: ["off", "right", "left"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    btnTxt: "#btn_txt",
    bg: "nega",
    grade: "ter",
    showIco: "off",
    size: "large",
    state: "disabled",
    className: {},
    elementBtnIcoTxtClassName: {},
  },
};
