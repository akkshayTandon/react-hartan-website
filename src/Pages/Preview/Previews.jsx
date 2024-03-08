import { Sidemenu } from "react-hartan";
import { NavLink, Outlet } from "react-router-dom";
import "./Previews.css"
import { listData } from "../../Data/Previews";


export default function Previews() {

    const list = listData.map((item) => {
        return {
            logo: <NavLink className={({ isActive }) => `${isActive && "isActive"}`} to={item.name.toLowerCase()}><img src={item.imgSrc} className="svg" /></NavLink>,
            elem: <NavLink className={({ isActive }) => `${isActive && "isActive"}`} to={item.name.toLowerCase()}>{item.name}</NavLink>
        }
    });


    return (
        <div className="preview">
            <div className="sidemenu" data-aos="fade-right" data-aos-duration="1000">
                <Sidemenu navList={list} userNavbarStyle="sidebarHeight" userNavButtonStyle="navBtnStyle" />
            </div>

            <aside data-aos="zoom-in" data-aos-duration="700" className="aside" id="aside">
                <Outlet />
            </aside>
        </div>
    )
}