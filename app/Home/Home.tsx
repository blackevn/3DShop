"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import Image from 'next/image';
import { Button } from '../components';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useGeneralContext } from '../context/AppContext';

const Home = () => {

  

  const { toggle, handleToggle, setToggle } = useGeneralContext()

  return ( 

      <AnimatePresence>
         {!toggle && (
          <motion.section className='home' {...slideAnimation('left')}>
              <motion.header {...slideAnimation('down')}>
                <Image
                src={'/three.png'} alt={'logo'} 
                width={200}
                height={200}      
                />
              </motion.header>

              <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation} className='flex flex-col gap-5'>
                  <h1 className='head-text'>
                    LET'S <br className='xl:block hidden'/> DO IT
                  </h1>
                </motion.div>
                
                <motion.div className='space-y-4' {...headContentAnimation}>
                <p className='max-w-md font-normal text-gray-600 '> Create your unique and exclusive shirt with our brand-new 3D customization tool. 
                  <strong>Unleash your imagination</strong> 
                  and define your own style. 
                </p>

                <Button   
                text="Customize It"
                clickEvent={() => setToggle(false)}
                modifier="w-fit px-4 py-2.5 font-bold text-sm cursor-pointer flex-row-reverse z-30 bg-white"
                icon={FaArrowAltCircleRight}
                />
            
                </motion.div>
              </motion.div>
          </motion.section>
         )}
       <div className='home'></div> 
      </AnimatePresence>
  );
}

export default Home