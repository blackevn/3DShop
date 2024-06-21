'use client'

import axios from 'axios';
import { IconBaseProps } from 'react-icons';
import { AIPicker, Button, ColorPicker, FilePicker } from '../components';
import { DecalType, DecalTypes, EditorTab, EditorTabs, FilterTabs } from '../config/config';
import state from '../store';
import {
  fadeAnimation,
  slideAnimation
} from '../config/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSnapshot } from 'valtio';
import { useGeneralContext } from '../context/AppContext';
import { reader } from '../config/helpers';

const Customizer = () => {

  const { toggle, handleToggle, setToggle, 
          file, setFile, prompt, setPrompt,
          generatingImg, setGeneratingImg,
          activeEditorTab, setActiveEditorTab,
          activeFilterTab, setActiveFilterTab } = useGeneralContext()

          console.log(prompt);
          

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    
    switch (activeEditorTab) {

      case "colorpicker":
        return <ColorPicker/>
        
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />

      case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />

      default:
        return null;
    }
  }

  // async function handleSubmit(type: DecalType) {

  //   if(!prompt) return alert("Please enter a prompt");

  //   try {

  //     setGeneratingImg(true);

  //     const response = await fetch('/api/dalle', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         prompt,
  //       })
  //     })

  //     const data = await response.json();

  //     handleDecals(type, `data:image/png;base64,${data.photo}` as DecalType)
  //   } catch (error) {
  //     alert(error)
  //   } finally {
  //     setGeneratingImg(false);
  //     setActiveEditorTab("");
  //   }

  // }
  const handleSubmit = async (type: DecalType) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await axios.post('/api/dalle', {
        prompt: prompt
      });

      if (response.status !== 200) {
        const message = `An error has occurred: ${response.statusText}`;
        throw new Error(message);
      }

      const data = response.data;

      handleDecals(type, `data:image/png;base64,${data.url}` as DecalType);
    } catch (error) {
      alert(`Error: ${error}`);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  // const handleSubmit = async (type: DecalType) => {
    
  //     if (!prompt) return alert("Please enter a prompt");
    
  //     try {
  //       setGeneratingImg(true);
    
  //       const response = await fetch('/api/dalle', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: prompt.toString()
  //       });
    
  //       if (!response.ok) {
  //         const message: string = `An error has occurred: ${response.statusText}`;
  //         console.log(message);
          
  //       }
    
  //       const data = await response.json();
    
  //       handleDecals(type, `data:image/png;base64,${data.url} ` as DecalType);
  //     } catch (error) {
  //       alert(`Error: ${error}`);
  //     } finally {
  //       setGeneratingImg(false);
  //       setActiveEditorTab("");
  //     }
  //   }

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState: { [x: string]: any; }) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const handleDecals = (type: DecalType , result: DecalType) => {
    const decalType = DecalTypes[type];
  
    if (!decalType) {
      console.error(`Invalid decal type: ${type}`);
      return;
    }
  
    state[decalType.stateProperty] = result
  
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile: (type: DecalType) => void = (type: DecalType) => {
    reader(file as File)
      .then((result) => {
        handleDecals(type, result as DecalType);
        setActiveEditorTab("");
      })
  }

  return (

    <AnimatePresence>
      {toggle && (
      <>
     <motion.div key={'custom'} className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
       <div className='flex items-center min-h-screen'>
         <div className='editortabs-container tabs '>
           {
             EditorTabs.map((tabs, i) => (<Button text={tabs.name}
                                                  key={i}
                                                  clickEvent={() => setActiveEditorTab(tabs.name)}
                                                  modifier='flex-col'
                                                  iconModifier='text-2xl'
                                                  icon={tabs.icon}/>))
           }
           {generateTabContent()}
         </div>
       </div>
     </motion.div>

     <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
           <Button
           icon={FaArrowAltCircleLeft}
           text='Back'
           clickEvent={() => setToggle(true)}
           modifier='bg-white'
           />
     </motion.div>

     <motion.div className='filtertabs-container' {...slideAnimation('up')}>
     {
             FilterTabs.map((tabs: EditorTab, i: number) => (<Button text={tabs.name}
                                                  key={i}
                                                  clickEvent={() => handleActiveFilterTab(tabs.name)}
                                                  modifier='flex-col'
                                                  // isActive={activeFilterTab[tabs.name]}
                                                  iconModifier={`text-2xl ${
                                                    tabs.name === "logoShirt" ? "text-blue-400" : "text-yellow-400"
                                                  } `}
                                                  icon={tabs.icon}/>))
     }
     </motion.div>

      </>
    )}

</AnimatePresence>

  )
}

export default Customizer

