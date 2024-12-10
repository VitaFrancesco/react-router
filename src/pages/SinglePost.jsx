import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from "./components/Card"

export default function SinglePost() {
    const { key } = useParams();
    const [post, setPost] = useState({});
    const baseUrl = 'http://localhost:3000/posts'

    useEffect(() => {
        axios.get(`${baseUrl}/${key}`)
            .then(res => {
                setPost(res.data[0])
            })
            .catch(err => console.error(err))
    }, [key])

    return (
        <main>
            <div className="container">
                <Card id={post.id} title={post.title} content={post.content} image={post.image || '../img/placeholder.jpg'} tags={post.tags} />
            </div>
        </main>
    )
}