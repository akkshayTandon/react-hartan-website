import { Card,Button } from "react-hartan"
import { Link } from "react-router-dom"
export default function BuiltHartan(){

  const btnTxt=<Link to="/preview">more</Link>
return (
    <div className='builtWithHartan' data-aos="fade-up" data-aos-duration="1000">
    <h1>Built with Hartan.js</h1>

    <div className='cardsContainer'>
      <Link to="">
        <Card imgSrc="/screenshot/hartanSS.png" userButtonStyle="none" userContentStyle="contentPara"/>
      </Link>
      <Link to="">
        <Card userButtonStyle="none" userContentStyle="contentPara"/>
      </Link>
      <Link to="">
        <Card userButtonStyle="none" userContentStyle="contentPara"/>
      </Link>
    </div>
    <Button buttonText={btnTxt} userButtonStyle="myBtn"/>
  </div>
)
}