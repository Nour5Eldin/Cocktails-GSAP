import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Cocktails from './Components/Cocktails';

function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
