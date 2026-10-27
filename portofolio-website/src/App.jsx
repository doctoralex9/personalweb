import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
        </div>
    )
}

export default App