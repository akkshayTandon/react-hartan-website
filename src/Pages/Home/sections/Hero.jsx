import { HeroSection, Button, Snippet } from "react-hartan"
import FetchVersion from "../../../Data/FetchVersion.js";

export default function Hero() {
  const latestVersion = FetchVersion();

  const heroAbt = <span><span>A ready made solution for your next project.</span><span>Hartan is a UI component library built on React JS and distributed as a NPM package. It offers a collection of independent, well-documented resources designed to facilitate rapid website development.</span></span>;


  const readDocs = <a href='https://hartans-organization.gitbook.io/hartan-docs/' target='_blank'>Read Docs</a>;


  return (
    <>
      <div className='version' data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-center">
        <Button buttonText={`version ${latestVersion}`} userButtonStyle="cursorNone" />
      </div>

      <div data-aos="zoom-in" data-aos-duration="1000">
        <HeroSection userHeroSectionStyle="heroSpacing" userHeroContentStyle="colorWhite" heroAbout={heroAbt} imgState={false} userButtonStyle="none" data-aos="zoom-in" />
      </div>

      <div className='buttons' data-aos="fade-up" data-aos-duration="1000">
        <Snippet userSnippetStyle="myBtn" />
        <Button buttonText={readDocs} userButtonStyle="myBtn" />
      </div>
    </>
  )
}