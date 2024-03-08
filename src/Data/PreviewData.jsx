import { Navbar, Accordion, Button, Card, Carousel, Dropdown, Footer, Form, HeroSection, Popup, Sidemenu, Snippet, Statistics, Team, Testimonial } from "react-hartan"

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
        elem: <Sidemenu userNavbarStyle="previewSidemenu" userNavHeaderStyle="disable" />
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
        elem: <Team></Team>
    },
    {
        id: "testimonial",
        elem: <Testimonial userTestimonialStyle="colorBlack"/>
    },
];