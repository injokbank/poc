import { Info } from "./Info";

export default {
  title: "Components/Info",
  component: Info,
  argTypes: {
    level: {
      options: ["two", "one"],
      control: { type: "select" },
    },
    comp: {
      options: ["txt", "card", "btn"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showTitleTxt: true,
    showContent: true,
    titleTxt: "#title_txt",
    showIco: false,
    showTooltip: false,
    level: "two",
    comp: "txt",
    className: {},
    divClassName: {},
    contentDivClassName: {},
  },
};
