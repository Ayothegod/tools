import { atom, map } from "nanostores";
import toast from "react-hot-toast";

export const $basketItems = atom([]);

export const $addItemsToBasket = (image, name, foodData) => {
  const checkItem = $basketItems.get().some((item) => item.name === name);

  if (checkItem) {
    toast.error("Recipe already in basket.", { duration: 2000 });
    // const newArray = $basketItems.set(
    //   $basketItems.get().map(item => {
    //     if(item.id === id){
    //       return {...item, quantity: item.quantity + 1}
    //     }
    //     return item
    //   })
    // )

    // return [...$basketItems.get(), newArray ]
    return;
  } else {
    toast.success("Recipe added to basket.");

    $basketItems.set([
      ...$basketItems.get(),
      {
        image,
        name,
        foodData,
      },
    ]);
  }
};
