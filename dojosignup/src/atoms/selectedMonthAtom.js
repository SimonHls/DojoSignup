import {atom} from 'recoil';

export const selectedMonthAtom = atom({
    key: "selectedMonthAtom",
    default: new Date(),
})