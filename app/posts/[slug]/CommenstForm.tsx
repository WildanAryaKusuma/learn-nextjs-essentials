"use client"

import { createComment } from "@/app/action"
import { useActionState } from "react"

const initialState = {
    error: ""
}

const CommentForm = () => {
    const [state, formAction, pending] = useActionState(createComment, initialState)

    return (
        <>
            <form className="flex flex-col w-72" action={formAction}>
                {state?.error && (
                    <div className="text-red-500" role="alert">
                        {state.error}
                    </div>
                )}
                

                <textarea required name="comment" placeholder="Write your comment here..." className="w-full h-40 border bg-amber-100 border-white mb-2 px-2 py-1 text-black" />
                <button className="bg-blue-600 px-4 py-2 rounded" disabled={pending}>Send</button>
            </form>
        </>
    )
}

export default CommentForm