import { useState, useEffect } from "react"
import axios from 'axios'
import Card from './components/Card';


export default function Blog() {
    const baseUrl = 'http://localhost:3000/posts'
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setPosts(res.data.posts)
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <main className="blog">
                <h1>Qui ci saranno tutti i post</h1>
                <div className="container">
                    {posts.map((post) => (
                        <Card key={post.id} id={post.id} title={post.title} content={post.content} image={post.image || '../img/placeholder.jpg'} tags={post.tags} />
                    ))}
                </div>
            </main>
        </>
    )
}