import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <ExperienceSection />
        </div>
    )
}

export default App