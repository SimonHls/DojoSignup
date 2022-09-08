import { atom } from "recoil";

export const currentUserDataAtom = atom({
  key: "currentUserDataAtom",
  default: {username: '',
            userId: null,
            role: 'USER',
            firstName: '',
            lastName: '',
            persNr: null,
            department: '',
            email: '',},
})