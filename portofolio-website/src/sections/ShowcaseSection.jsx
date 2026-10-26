import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/*LEFT SIDE*/}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper bg-[#000000]'>
                        <img src='/images/project1.png' alt="Chatbot" />     
                    </div>
                    <div className='text-content'>
                        <h2>Shape It Your Way: An AI Chatbot You Can Customize for Any Business, Brand, or Use Case</h2>
                        <p className='text-white-50 md:text-xl'>A showcase of modern web development: React and React
                             Three Fiber bring the 3D scene to life, GSAP powers smooth animations, and Tailwind CSS 
                             keeps the design sharp on every screen.
                        </p>
                    </div>
                </div>

                {/*RIGHT SIDE*/}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#000000]'>
                            <video
                                src="/videos/pitogyro.mp4"
                                poster="/videos/pitogyro-poster.jpg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                aria-label="Pitogyro website scroll animation preview"
                                />
                        </div>        
                    </div>

                    <div className='project'>
                        <div className='image-wrapper bg-[#000000]'>
                            <video
                                src="/videos/bar.mp4"
                                poster="/videos/bar-poster.jpg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                aria-label="Bar website scroll animation preview"
                                />
                        </div>        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShowcaseSection