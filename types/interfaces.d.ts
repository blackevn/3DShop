export type ClickEvent =  MouseEventHandler<HTMLButtonElement> | string | (() => void)

type FunctionHandler = () => void;

type ToggleHandler = boolean | FunctionHandler

export interface ContextData {

    width: number
    height: number
    file: File | null
    setFile?: ClickEvent
    prompt?: string
    setPrompt?: ClickEvent
    generatingImg: boolean
    user?: IUser
    addModalToggle?: boolean | undefined
    setAddModalToggle?: ClickEvent
    setGeneratingImg?: ClickEvent
    setActiveEditorTab?: ClickEvent
    toggle?: ToggleHandler
    showPassword?: ToggleHandler
    handleToggle?: ClickEvent
    darkMode?: ToggleHandler
    toggleDarkMode?: ClickEvent,
    activeEditorTab: string
    activeFilterTab: {
      logoShirt: boolean;
      stylishShirt: boolean;
  }
    setActiveFilterTab?: ClickEvent
  }

  export interface State {
    intro: boolean;
    color: string;
    isLogoTexture: boolean;
    isFullTexture: boolean;
    logoDecal: string;
    fullDecal: string;
}

  export interface IProps {

    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
      
  }

  export interface ContextData {

    width: number
    height: number
    addModalToggle?: boolean | undefined
    setAddModalToggle?: ClickEvent
    setToggle? : ClickEvent
    toggle?: ToggleHandler
    showPassword?: ToggleHandler
    handleToggle?: ClickEvent
    darkMode?: ToggleHandler
    toggleDarkMode?: ClickEvent,

  }