import { atom, map } from "nanostores";

export const $isCartOpen = atom(false);

export const $cartItems = atom([]);

export const $addItemsToCart = (id, item, price, quantity, store) => {
  const checkItem = $cartItems.get().some(item => item.id === id)

  if (checkItem) {
    const newArray = $cartItems.set(
      $cartItems.get().map(item => {
        if(item.id === id){
          return {...item, quantity: quantity + 1}
        }
        return item
      })
    )

    return [...$cartItems.get(), newArray ]
    // $cartItems.set([
    //   $cartItems.get().map(item => {
    //     item.quantity = item.quantity + 1
    //   })
    // ])
    console.log("wow");
    console.log($cartItems.get());
  } else {
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
