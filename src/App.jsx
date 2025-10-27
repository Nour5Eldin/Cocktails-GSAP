import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './Components/NavBar';


function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  return (
    <main>
      <NavBar />
    </main>
  )
}

export default App
