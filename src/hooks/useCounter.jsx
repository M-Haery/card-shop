import React from 'react'
import { useState } from 'react';

export default function useCounter(init) {
    const [quantity, setQuantity] = useState(init);

    function quantityPlus(){
        setQuantity((prevState) => {
          return prevState + 1
        })
    
      }
    
      function quantityMinus(){
        setQuantity((prevState) => {
          return prevState - 1
        })
      }
      return [quantity, quantityPlus, quantityMinus]
}
