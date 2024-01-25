import { atom, map } from 'nanostores'

export const $counter = atom(0)

export const cartItems = map({})

export function addCartItem({ id, name }) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    })
    console.log("Going")   
} else {
    cartItems.setKey(
        id,
        { id, name, quantity: 1 }
        );
        console.log("Going noy")   
  }
}