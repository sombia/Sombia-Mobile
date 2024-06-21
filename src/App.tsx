import { act, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

import PWANotice from './components/PWANotice';
import WindowHandler from './components/WindowHandler';

function App() {
  const [active, setActive] = useState("start");

  return (
    <main>
      {(window as any).device && (window as any).device.platform == "browser" && !window.matchMedia('(display-mode: standalone)').matches ? <PWANotice></PWANotice> : <><WindowHandler active={active}></WindowHandler><Navigation callback={setActive} active={active}></Navigation></>}
    </main>
  )
}

export default App
