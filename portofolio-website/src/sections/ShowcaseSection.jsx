import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/*LEFT SIDE*/}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src='/images/project1.png' alt="Chatbot" />     
                    </div>
                    <div className='text-content'>
                        <h2>Shape It Your Way: An AI Chatbot You Can Customize for Any Business, Brand, or Use Case</h2>
                        <p className='text-white-50 md: text-xl'>A showcase of modern web development: React and React
                             Three Fiber bring the 3D scene to life, GSAP powers smooth animations, and Tailwind CSS 
                             keeps the design sharp on every screen.</p>
                    </div>
                </div>

                {/*RIGHT SIDE*/}
            </div>

        </div>
    </div>
  )
}

export default ShowcaseSection