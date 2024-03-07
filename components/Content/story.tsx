import { Content } from ".";

export default {
  title: "Components/Content",
  component: Content,
  argTypes: {
    comp: {
      options: ["txt", "desc-txt", "desc-txt-link"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    txt: "#txt",
    descTxt: "#desc_txt",
    comp: "txt",
    size: "medium",
    className: {},
    divClassName: {},
  },
};
