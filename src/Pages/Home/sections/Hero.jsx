import { useState, useEffect } from "react";
import { HeroSection, Button, useFetch, Snippet } from "react-hartan"

export default function Hero() {

  const [latestVersion, setLatestVersion] = useState(null);

  // Fetch the latest version of React using a custom hook
  const [getData] = useFetch();
  async function getLatestVersion() {
    const [result] = await getData("https://registry.npmjs.org/react-hartan");
    setLatestVersion(result["dist-tags"]?.latest)
  }
  useEffect(() => {
    getLatestVersion()
  }, []);

  const heroAbt = <span><span>A ready made solution for your next project.</span><span>Hartan is a UI component library built on React JS and distributed as a NPM package. It offers a collection of independent, well-documented resources designed to facilitate rapid website development.</span></span>;


  const readDocs = <a href='https://hardiksingh.me' target='_blank'>Read Docs</a>;


  return (
    <>
      <div className='version' data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="top-center">
        <Button buttonText={`version ${latestVersion}`} userButtonStyle="cursorNone" />
      </div>

      <div data-aos="zoom-out" data-aos-duration="1000">
        <HeroSection userHeroSectionStyle="spacing" userHeroContentStyle="colorWhite" heroAbout={heroAbt} imgState={false} userButtonStyle="none" data-aos="zoom-in" />
      </div>

      <div className='buttons'  data-aos="fade-up" data-aos-duration="1500">
        <Snippet userSnippetStyle="myBtn"/>
        <Button buttonText={readDocs} userButtonStyle="myBtn" />
      </div>
    </>
  )
}