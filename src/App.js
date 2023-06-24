import './App.css';
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Socials from "./components/socials/socials";
import Skills from "./pages/skills/skills";
import {useEffect, useRef} from "react";

function App() {

    const appRef = useRef(null);

    useEffect(()=>{
        const updateMousePosition = (event) => {
            if (!appRef.current) return;
            const {pageX, pageY} = event
            appRef.current.style.setProperty("--x",`${pageX}px`)
            appRef.current.style.setProperty("--y",`${pageY}px`)
        }
        window.addEventListener('mousemove', updateMousePosition)

        return ()=> {
            window.removeEventListener('mousemove', updateMousePosition)
        }

    },[])

    return (
        <div className={"App"} ref={appRef}>
            <header>
                <Navbar/>
            </header>

            <main className={"Main"}>
                <Socials/>
                <Home/>
                <About/>
                <Skills/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
