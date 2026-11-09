import TitleHeader from "../components/TitleHeader"
import { expCards } from "../constants"
import GlowCard from "../components/GlowCard"

const ExperienceSection = () => {
  return (
    <section id="experience" className='w-full
    md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader 
            title='Experience'
            sub="💼My Career Overview"/>
            
            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                            <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}>
                                    <div>
                                        {card.imgPath && (
                                            <div aria-hidden="true" className="marquee-logo w-fit"
                                                style={{ maskImage: `url(${card.imgPath})` }}>
                                                <img src={card.imgPath} alt="" className="block h-8 w-auto invisible" />
                                            </div>
                                            )}
                                    </div>
                                </GlowCard>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection