import './Postagem.css'
import styles from "./Postagem.module.css"

import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostagemModelo from "componentes/PostagemModelo";
import ReactMarkdown from "react-markdown"
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostagemCard from 'componentes/PostagemCard';

export default function Postagem() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostagemModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>
                        
                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostagemCard post={post} />
                                </li>
                            ))}
                        </ul>

                    </PostagemModelo>
                } />
            </Route>
        </Routes>
    )
}