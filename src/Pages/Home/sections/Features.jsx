import { Card } from "react-hartan"
import { features } from "../../../Data/HomeData"

export default function Features() {
    return (
        <div className='features' data-aos="fade-up" data-aos-duration="1000">
            <h2>Features</h2>
            <div className='featuresCard'>
                {
                    features.map((card, id) => {
                        return <div key={id} data-aos="fade-up" data-aos-duration="1000"> 
                        <Card userCardStyle="cardStyle" imgSrc={card.imgSrc} imgAlt={card.heading} userContentStyle="cardCss" contentHeading={card.heading} contentPara={card.content} userButtonStyle="none" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}