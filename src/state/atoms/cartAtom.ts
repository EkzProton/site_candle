import { atom } from 'recoil';

export const cartAtom = atom<{ id: number, quantity: number }[]>({
  key: 'cart', // unique ID (with respect to other atoms/selectors)
  default: localStorage.getItem('cart') ? JSON.parse(String(localStorage.getItem('cart'))) : [] // default value (aka initial value)
});