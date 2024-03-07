import { atom } from "recoil";

export const deviceState = atom({
  key: "deviceState",
  default: "MW",
});

export const scrollState = atom({
  key: "scrollState",
  default: "false",
});
