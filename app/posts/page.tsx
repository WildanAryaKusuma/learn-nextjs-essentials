import Link from "next/link"
import { Post } from "../types/Posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Posts",
}

async function getPosts(): Promise<Post[]> {
    const response = await fetch('http://localhost:3001/posts')
    const posts = await response.json()

    return posts
}

export default async function Page() {
    // fake delay
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000))

    const posts = await getPosts()

    return (
        <>
            <h1>Posts Page</h1>

            <div className="m-2 p-2">
                {posts.map((post) => (
                    <article key={post.id} className="my-2">
                        <Link href={`/posts/${post.slug}`}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    )
}