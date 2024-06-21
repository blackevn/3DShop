"use client"

import { Canvas } from './components';
import Customizer from './Customizer/Customizer';
import Home from './Home/Home';


export default function MainPage() {

  return (

    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}
