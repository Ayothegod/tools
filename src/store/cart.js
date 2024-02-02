import { atom, map } from "nanostores";
import toast from "react-hot-toast";
import { persistentAtom } from "@nanostores/persistent";

// export const $basketItems = atom([]);

export const $shoppingBasket = persistentAtom("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const $removeItemFromBasket = (name) => {
  // toast.success("Recipe removed from basket.");
 return $shoppingBasket.set(
    $shoppingBasket.get().filter((item) => item.name !== name)
  );
};

export const $addItemsToBasket = (image, name, foodData) => {
  const checkItem = $shoppingBasket.get().some((item) => item.name === name);

  if (checkItem) {
    toast.error("Recipe already in basket.", { duration: 2000 });
    return;
  } else {
    toast.success("Recipe added to basket.");

    $shoppingBasket.set([
      ...$shoppingBasket.get(),
      {
        image,
        name,
        foodData,
      },
    ]);
  }
};
