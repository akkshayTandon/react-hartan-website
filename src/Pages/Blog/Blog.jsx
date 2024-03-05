import { useParams } from "react-router-dom";
import { Blogdata } from "./Blogdata";

export default function Blog() {
    const params = useParams();
    const { blogName } = params;

    const blog = Blogdata.find((data) => data.id === blogName);   //filter the array to get data of specific
    return (
        <div style={{ color: "#ffffff" }}>
            {blogName}
            {blog?.content}
        </div>
    )
}