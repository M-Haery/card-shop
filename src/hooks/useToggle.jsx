import React from 'react'
import { useState } from 'react';

export default function useToggle() {
  const [isShow, setIsShow] = useState(false);

  function clickHandler() {
    setIsShow((prevIsShow) => !prevIsShow);
  }

  return [isShow, clickHandler]
}
