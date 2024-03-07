import { Ico } from ".";

export default {
  title: "Components/Ico",
  component: Ico,
  argTypes: {
    shape: {
      options: ["solid", "transparent", "stroke"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "x-small", "xx-small", "small", "xxx-small", "medium"],
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
    shape: "solid",
    size: "large",
    state: "disabled",
  },
};
