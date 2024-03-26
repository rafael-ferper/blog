import Postagem from "componentes/PostagemCard";
import styles from "./Inicio.module.css";

import posts from 'json/posts.json'

export default function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Postagem post={post} />
                    </li>
                ))}
            </ul>
    )
}