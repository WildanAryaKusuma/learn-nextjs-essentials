import { Suspense } from "react"
import { Post } from "../../types/Posts"
import CommentsContent from "./CommentsContent"
import LikeButton from "./LikeButton"
import CommentForm from "./CommenstForm"
import { notFound } from "next/navigation"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const post = await getDetailPost(slug)

    if (!post) {
        return {
            title: "Post Not Found"
        }
    }

    return {
        title: post.title
    }
}

async function getDetailPost(slug: string): Promise<Post> {
    const res = await fetch(`http://localhost:3001/posts/?slug=${slug}`)
    const [post] = await res.json()

    return post
}

export default async function Page({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = await getDetailPost(slug)

    if (!post) {
        notFound()
    }

    console.log(post)

    return (
        <>
            <article>
                <h1 className="my-3">Post Detail Page</h1>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <hr className="my-3" />
                <LikeButton postId={post.id} />
            </article>
            <section className="my-3 mx-2">
                <h2>Comments</h2>
                <Suspense fallback={<div>Loading comments...</div>}>
                    <CommentsContent />
                </Suspense>
                <CommentForm />
            </section>
        </>
    )
}