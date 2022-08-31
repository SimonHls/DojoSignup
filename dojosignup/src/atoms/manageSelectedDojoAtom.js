import { atom } from "recoil";

export const manageSelectedDojoAtom = atom({
  key: "manageSelectedDojoAtom",
  default: ["", ""],
})