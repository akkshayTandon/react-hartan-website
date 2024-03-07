import { useParams } from "react-router-dom";
import { Blogdata } from "./Blogdata.js";

export default function Blog() {
    const params = useParams();
    const { blogName } = params;

    const blog = Blogdata.find((data) => data.id === blogName);   //filter the array to get data of specific
    return (
        <div className="blogData">
            <figure>
                <img src="/Discord-Symbol.png" alt="Discord" />
            </figure>

            <main>
                <div>
                    <p><i>published </i>4 March, 2024</p>
                    <h1>{blog?.heading}</h1>
                    <h2>{blog?.discription}</h2>
                </div>

                <article>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis aliquid incidunt quod perferendis nam repudiandae saepe recusandae laudantium aperiam sint, deserunt ipsum quam magni soluta atque vero. Illo quisquam voluptatum alias non porro, reiciendis ex culpa placeat nihil suscipit, tempore corrupti. Vel, quibusdam numquam autem earum ab inventore consequuntur fugiat sapiente impedit maiores, dicta, doloribus accusamus! Similique officiis quod consectetur quia voluptates debitis autem, aliquam ea laudantium ratione fugit, sed quae quasi alias. Animi illum saepe eum ea dolores harum dolorem laboriosam suscipit non, doloremque est magni voluptates facere cumque placeat libero doloribus atque repellendus earum beatae eveniet explicabo.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis aliquid incidunt quod perferendis nam repudiandae saepe recusandae laudantium aperiam sint, deserunt ipsum quam magni soluta atque vero. Illo quisquam voluptatum alias non porro, reiciendis ex culpa placeat nihil suscipit, tempore corrupti. Vel, quibusdam numquam autem earum ab inventore consequuntur fugiat sapiente impedit maiores, dicta, doloribus accusamus! Similique officiis quod consectetur quia voluptates debitis autem, aliquam ea laudantium ratione fugit, sed quae quasi alias. Animi illum saepe eum ea dolores harum dolorem laboriosam suscipit non, doloremque est magni voluptates facere cumque placeat libero doloribus atque repellendus earum beatae eveniet explicabo.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis aliquid incidunt quod perferendis nam repudiandae saepe recusandae laudantium aperiam sint, deserunt ipsum quam magni soluta atque vero. Illo quisquam voluptatum alias non porro, reiciendis ex culpa placeat nihil suscipit, tempore corrupti. Vel, quibusdam numquam autem earum ab inventore consequuntur fugiat sapiente impedit maiores, dicta, doloribus accusamus! Similique officiis quod consectetur quia voluptates debitis autem, aliquam ea laudantium ratione fugit, sed quae quasi alias. Animi illum saepe eum ea dolores harum dolorem laboriosam suscipit non, doloremque est magni voluptates facere cumque placeat libero doloribus atque repellendus earum beatae eveniet explicabo.</p>
                </article>
                <a href="https://discord.gg/6DHUp662">Join the Discord server now 
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"><path fill="#c4c3c3" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </a>
            </main>
        </div>
    )
}