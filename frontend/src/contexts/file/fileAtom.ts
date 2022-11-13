import { atom } from 'recoil';

export const fileAtom = atom<File[]>({
    key: 'fileAtom',
    default: [],
});
