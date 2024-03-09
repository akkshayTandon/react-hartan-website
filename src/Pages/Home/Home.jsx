import "./Home.css"
import Hero from './sections/Hero';
import ResDesign from './sections/ResDesign';
import Features from './sections/Features';
import BuiltHartan from './sections/BuiltHartan';
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <ResDesign />
            <Features />
            <BuiltHartan />
        </>
    )
}