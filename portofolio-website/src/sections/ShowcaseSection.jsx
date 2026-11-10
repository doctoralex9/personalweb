import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
    //Everything in this block of code works only oncle when the component melts
    //It works similarly to Reacts
        const projects = [project1Ref.current, project2Ref.current, 
    project3Ref.current];

        projects.forEach((card, index) =>
        gsap.fromTo(
            card,
            {
                y: 50, 
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                //Every project appears 3 sec after the previous, while you scrolling
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    //The animation starts, when the top of the card is near (100px) to the bottom
                    start: 'top bottom-=100'
                }
            }
        ))
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 }, 
            { opacity: 1, duration: 1.5 })
    }, [])

  return (
    <div id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/*LEFT SIDE*/}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper bg-[#000000]'>
                        <img src='/images/project1.png' alt="Chatbot" />     
                    </div>
                    <div className='text-content'>
                        <h2>Shape It Your Way: An AI Chatbot You Can Customize for Any Business, Brand, or Use Case</h2>
                        <p className='text-white-50 md:text-xl'>Built with Next.js 15 and the Vercel AI SDK: streaming OpenAI responses, Supabase login and file uploads, ready to adapt to any business.</p>
                        <div className='flex gap-5 text-white-50'>
                            <a href="https://ai-chatbot-nextjs-navy.vercel.app" target="_blank" rel="noopener noreferrer" className='underline hover:text-white'>Live demo ↗</a>
                            <a href="https://github.com/doctoralex9/ai-chatbot-nextjs" target="_blank" rel="noopener noreferrer" className='underline hover:text-white'>GitHub ↗</a>
                        </div>
                    </div>
                </div>

                {/*RIGHT SIDE*/}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#F3EEE6]'>
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
                            <h2>ΠΙΤΟΓΥΡΟ: A Modern Greek Street Food Website</h2>
                            <p className='text-white-50'>Built with React, GSAP ScrollTrigger, and Lenis, the page unwraps a pita layer by layer as you scroll.</p>
                            <a href="https://pitogyro-ashy.vercel.app/" target="_blank" rel="noopener noreferrer" className='inline-block mt-3 text-white-50 underline hover:text-white'>Live site ↗</a>        
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#2A2118]'>
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
                            <h2>BAR: A Cinematic Cocktail Bar Website</h2>
                            <p className='text-white-50'>GSAP animations and Lenis smooth scrolling lead visitors from the signature pour to pinned cocktail spotlights, in English and Greek.</p>
                            <a href="https://bar-bice-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className='inline-block mt-3 text-white-50 underline hover:text-white'>Live site ↗</a>        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShowcaseSection