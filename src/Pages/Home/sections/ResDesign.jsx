import { HeroSection } from "react-hartan"
export default function ResDesign() {
    return (
        <div className='deviceRes' data-aos="fade-up" data-aos-duration="1000">
            <div className='deviceImg'>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path className="deviceSVG" d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path className="deviceSVG" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM176 432h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path className="deviceSVG" d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" /></svg>
                </span>
            </div>
            <HeroSection userHeroSectionStyle="myHero" userHeroContentStyle="myHeroHeading" heroHeadName='Responsive Design' heroAbout='The Hartan Component library provide beautiful and easily customizable components to the user. In fact, responsive styling is supported out of the box inside each component library in Hartan.' imgSrc="/responsive.gif" userButtonStyle={"none"} />
        </div>
    )
}