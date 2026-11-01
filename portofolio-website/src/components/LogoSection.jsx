import { logoIconsList } from '../constants'

//Self closing component that only accepts icon
const LogoIcon = ({ icon }) => {
    return (
    <div className='flex-none flex-center marquee-item'>
        <div
            role='img'
            aria-label={icon.name}
            className='marquee-logo'
            style={{ maskImage: `url(${icon.imgPath})` }}
        >
            {/*invisible copy only gives the box the logo's real shape*/}
            <img src={icon.imgPath} alt='' className='md:h-9 h-7 w-auto md:max-w-36 max-w-28 invisible' />
            </div>
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