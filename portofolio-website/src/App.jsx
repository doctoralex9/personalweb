import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoDection />
        </div>
    )
}

export default App