import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';


function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  )
}

export default App
