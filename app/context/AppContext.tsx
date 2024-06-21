import {useContext, createContext, useState } from "react";
import { useToggle, useHeight, useWidth } from "../hooks";
import { IProps, ContextData } from "$/types/interfaces";

const GeneralContext = createContext<ContextData>({
  height: 0,
  width: 0,
  file: null,
  generatingImg: false,
  activeFilterTab: {
    logoShirt: false,
    stylishShirt: false
  },
  activeEditorTab: ""
}) 

export const GeneralAppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const [ width ] = useWidth()
    const [ toggle, setToggle, handleToggle ] = useToggle(false)
    
    const [file, setFile] = useState<File | null>(null);
    
    const [ prompt, setPrompt ] = useState<string>('')

    const [ generatingImg, setGeneratingImg ] = useToggle(false)

    const [ activeEditorTab, setActiveEditorTab ] = useState<string>('')

    const [ activeFilterTab, setActiveFilterTab ] = useState({
      logoShirt: true,
      stylishShirt: false
    })

    
  return <GeneralContext.Provider value={{ height,  width, toggle, setToggle, handleToggle, 
                                            file, setFile,
                                            prompt, setPrompt,
                                            generatingImg, setGeneratingImg,
                                            activeEditorTab, setActiveEditorTab,
                                            activeFilterTab, setActiveFilterTab }}>

            {children}

        </GeneralContext.Provider>
}

export const useGeneralContext = () => useContext(GeneralContext)