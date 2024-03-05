import { Sidemenu } from "react-hartan";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./Previews.css"


export default function Previews() {

    const list = [
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="accordion"><img src="/dot.svg" className="svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="accordion">Accordion</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="button"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="button">Button</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="card"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="card">Card</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="carousel"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="carousel">Carousel</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="dropdown"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="dropdown">Dropdown</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="footer"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="footer">Footer</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="form"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="form">Form</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="hero"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="hero">Hero</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="navbar"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="navbar">Navbar</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="popup"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="popup">Popup</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="sidemenu"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="sidemenu">Sidemenu</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="snippet"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="snippet">Snippet</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="statistics"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="statistics">Statistics</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="team"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="team">Team</NavLink>
        },
        {
            logo: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="testimonial"><img src="/dot.svg" /></NavLink>,
            elem: <NavLink className={({isActive})=>`${isActive&& "isActive"}`} to="testimonial">Testimonial</NavLink>
        },
    ];

    return (
        <>
            <div className="preview">

                <div className="sidemenu">
                    <Sidemenu navList={list} userNavbarStyle="sidebarHeight" userNavButtonStyle="navBtnStyle"  />
                </div>

                <aside className="aside" id="aside">
                    <Outlet />
                </aside>

            </div>
        </>
    )
}