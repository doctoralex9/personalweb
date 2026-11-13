import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <ExperienceSection />
            <TechStack />
            <Contact />
        </div>
    )
}

export default App