import { logoIconsList } from '../constants'

//Self closing component that only accepts icon
const LogoIcon = ({ icon }) => {
    return (
    <div className='flex-none flex-center marquee-item'>
        <div
            role='img'
            aria-label={icon.name}
            className='marquee-logo md:h-9 h-7'
            style={{ maskImage: `url(${icon.imgPath})` }}
        />
    </div>)
}


const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>  

        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}

                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div> 
    </div>
  )
}

export default LogoSection