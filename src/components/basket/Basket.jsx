import { useStore } from '@nanostores/react'
import React from 'react'
import { $basketItems } from '../../store/cart'

export default function Basket() {
    const basketItems = useStore($basketItems)
    console.log(basketItems);
  return (
    <div>Basket</div>
  )
}
