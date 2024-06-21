'use client'

import { useState, useEffect } from "react"

const useHeight = () => {

  const [height, setHeight] = useState(0);

  const handleResize = () => {

    setHeight(window.innerHeight)

  }

  useEffect(() => {
    setHeight(window.innerHeight)
    window.addEventListener("resize", handleResize) 
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return [height]
}

export default useHeight;