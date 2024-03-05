import "./Blog.css"
import FetchVersion from "../../FetchVersion.js";
import { Link } from "react-router-dom";
import { Card } from "react-hartan";
import { Blogdata } from "./Blogdata.js";

export default function Blogs() {
    const latestVersion = FetchVersion();


    return (
        <div className="blog">
            <h1><span>Latest </span><span>@Hartan</span> <span>v{latestVersion}</span></h1>

            <h2>All the latest Hartan Library news, straight from the team.
                Follow us on
                <Link style={{ textDecoration: "none" }} to="https://twitter.com/hartanlibrary"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></Link>
                for more!
            </h2>

            <div className="blogCards">
                {
                    Blogdata.map((blog, id) => {
                        return <Card key={id} userCardStyle="blogCard" contentHeading={blog.heading} contentPara={blog.content} imgState={false} buttonText={<Link to={`${blog.id}`} style={{ textDecoration: "none", color: "#ffffff" }}>read more</Link>} />
                    })
                }
            </div>
        </div>
    )
}