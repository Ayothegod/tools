import { atom, map } from "nanostores";

export const $isCartOpen = atom(false);

export const $cartItems = atom([]);

export const $addItemsToCart = (id, item, price, quantity) => {
  const checkItem = $cartItems.get().some(item => item.id === id)

  if (checkItem) {
    // return a modal that says item already in cart and increased by one
    const newArray = $cartItems.set(
      $cartItems.get().map(item => {
        if(item.id === id){
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
    )

    return [...$cartItems.get(), newArray ]
  } else {
    // returnn a modal that says item increased by one
    $cartItems.set([
      ...$cartItems.get(),
      {
        id,
        item,
        price,
        quantity,
      },
    ]);
  }
};
