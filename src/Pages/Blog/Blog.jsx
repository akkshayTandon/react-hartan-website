import { useParams } from "react-router-dom";
import { Blogdata, getMonthName } from "../../Data/Blogdata.js";
import { useEffect } from "react";

export default function Blog() {
    const params = useParams();
    const { blogName } = params;

    const blog = Blogdata.find((data) => data.id === blogName);   //filter the array to get data of specific

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blogData">
            {
                blog?.imgSrc &&
                <figure data-aos="zoom-out" data-aos-duration="700">
                    <img src={blog?.imgSrc} alt="Image" />
                </figure>
            }

            <main>
                <div data-aos="fade-up" data-aos-duration="700">
                    <p><i>published </i>{blog?.published.date} {getMonthName[blog?.published.month]}, {blog?.published.year}</p>
                    <h1>{blog?.heading}</h1>
                    <h2>{blog?.description}</h2>
                </div>

                <article data-aos="fade-up" data-aos-duration="700" >
                    {
                        blog?.content.map((para, id) => {
                            return <p key={id}>{para}</p>
                        })
                    }
                </article>

                {
                    blog?.linkSrc && blog?.linkSrcName &&
                    <a data-aos="fade-up" data-aos-duration="700" href={blog?.linkSrc}>{blog?.linkSrcName}
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"><path fill="#c4c3c3" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </a>
                }
            </main>
        </div>
    )
}