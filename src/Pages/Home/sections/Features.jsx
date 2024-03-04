import { Card } from "react-hartan"

export default function Features() {
    return (
        <div className='features' data-aos="fade-up" data-aos-duration="1000">
            <h2>Features</h2>
            <div className='featuresCard'>
                <Card userCardStyle="cardStyle" imgSrc="/features/easy-to-use.gif" userButtonStyle="none" contentHeading='Easy to use' userContentStyle="cardCss" contentPara='Quickly integrate Hartan components into your React app to speed up development.' />

                <Card userCardStyle="cardStyle" imgSrc="/features/customize.gif" contentHeading='Customizable' userContentStyle="cardCss" contentPara="Modify the styles to fit your brand's look and feel with ease." userButtonStyle="none" />

                <Card userCardStyle="cardStyle" imgSrc="/features/fast.gif" userContentStyle="cardCss" contentHeading='Fast Development' contentPara="Hartan decreases the development time for your project" userButtonStyle="none" />
            </div>
        </div>
    )
}