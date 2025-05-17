"use client"

import { createLike } from "@/app/action"
import { useTransition } from "react"

const LikeButton = ({postId}: {postId: number}) => {
    const [pending, startTransition] = useTransition()

    async function handleLike() {

        startTransition(async () => {
            await createLike(postId)
        })
    }

    return (
        <>
            <button className="bg-amber-50 text-black py-1 px-2 rounded"
                onClick={handleLike}
            >
                {pending ? "Like...." : "Like"}
            </button>
        </>
    )
}

export default LikeButton