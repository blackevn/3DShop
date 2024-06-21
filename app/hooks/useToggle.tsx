"use client";

import { ClickEvent } from "../../types/interfaces";
import { useState } from "react";


const useToggle = ( initialValue:boolean = false ) => {

  const [ toggle, setToggle ] = useState(initialValue)

  const handleToggle: ClickEvent = () => {

      setToggle(prev => !prev)

  }

  return [ toggle, handleToggle, setToggle ]

}

export default useToggle;