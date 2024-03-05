import { useParams } from "react-router-dom"
import { Navbar, Accordion, Button, Card, Carousel, Dropdown, Footer, Form, HeroSection, Popup, Sidemenu, Snippet, Statistics, Team, Testimonial } from "react-hartan"
import "./Previews.css"

export const Components = [
    {
        id: "accordion",
        elem: <Accordion />
    },
    {
        id: "button",
        elem: <Button userButtonStyle="giant" />
    },
    {
        id: "card",
        elem: <Card />
    },
    {
        id: "carousel",
        elem: <Carousel userCarouselStyle="carouselStyle" />
    },
    {
        id: "dropdown",
        elem: <Dropdown />
    },
    {
        id: "footer",
        elem: <Footer userFooterStyle="colorBlack" />
    },
    {
        id: "form",
        elem: <Form />
    },
    {
        id: "hero",
        elem: <HeroSection />
    },
    {
        id: "navbar",
        elem: <Navbar userLogoStyle="colorBlack" userHeaderStyle="fullWidth" />
    },
    {
        id: "popup",
        elem: <Popup />
    },
    {
        id: "sidemenu",
        elem: <Sidemenu userNavbarStyle="previewSidemenu" />
    },
    {
        id: "snippet",
        elem: <Snippet />
    },
    {
        id: "statistics",
        elem: <Statistics />
    },
    {
        id: "team",
        elem: <Team />
    },
    {
        id: "testimonial",
        elem: <Testimonial userTestimonialStyle="colorBlack" />
    },
];

export default function Preview({ defaultIndex }) {
    const params = useParams();
    const { id = Components[0].id } = params;

    let index = Components.findIndex((obj) => obj.id === id);

    return (
        <>
            <h1>{Components[index].id.toUpperCase()}</h1>
            <hr />
            {
                Components[index === -1 ? defaultIndex : index]?.elem
            }
        </>
    )
}