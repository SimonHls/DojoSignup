import {atom} from 'recoil';

export const selectedDateAtom = atom({
    key: "selectedDateAtom",
    default: new Date(),
})