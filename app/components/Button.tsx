'use client'

import { IconType } from "react-icons"


import { FaIcons } from "react-icons/fa"


export type ButtonProps = {

  text?: string 
  textColor?: string 
  bgColor?: string
  clickEvent?: () => void
  borderColor?: string 
  icon: IconType
  borderSize?: string 
  paddingX?: string
  paddingY?: string
  children?: JSX.Element
  modifier?: string
  tip?: string
  isActive?: boolean
  iconModifier?: string
  disabled?: boolean

}

const Button: React.FC<ButtonProps> = (props) => {

  
  
 

    const {

           text = "Button", 
           textColor, 
           bgColor, 
           clickEvent, 
           borderColor, 
           icon: Icon = FaIcons, 
           children,
           modifier,
           tip,
           isActive,
           disabled,
           iconModifier
           
          
          } = props

  return (
    <>
    
    <button type="button" disabled={disabled} onClick={clickEvent}
    
    className={`
        p-4
        flex
        items-center
        justify-center
        gap-2
        rounded-full
        btn-sm
        text-[12px]
        lg: text-md
        
        ${isActive && "bg-blue-500 text-white"}
        ${modifier}
        ${borderColor} 
        ${textColor}
        ${bgColor}
     
 
    `}

     data-tip={tip}
    
          ><Icon className={iconModifier}/>
          
            {text}
            {children}
        
        </button>

    </>
  )
}


export default Button;