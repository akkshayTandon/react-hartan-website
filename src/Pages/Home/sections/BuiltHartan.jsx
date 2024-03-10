import { Card, Button } from "react-hartan"
import { Link } from "react-router-dom"
import { buildWithHartan } from "../../../Data/HomeData";

export default function BuiltHartan() {

  const btnTxt = <Link to="/preview">more</Link>;

  return (
    <div className='builtWithHartan' data-aos="fade-up" data-aos-duration="1000">
      <h1>Built with Hartan.js</h1>

      <div className='cardsContainer'>
        {
          buildWithHartan.map((built, id) => {
            return <div key={id} data-aos="fade-up" data-aos-duration="1000">
              <Link to={built.linkSrc}>
                <Card imgSrc={built.imgSrc} imgAlt={built.heading} userButtonStyle="none" userContentStyle="contentPara" contentHeading={built.heading}/>
              </Link>
            </div>
          })
        }
      </div>
      <Button buttonText={btnTxt} userButtonStyle="myBtn" />
    </div>
  )
}