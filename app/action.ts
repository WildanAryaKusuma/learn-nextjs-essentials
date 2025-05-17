'use server'

import { type CommentFormState } from "./types/CommentFormState"

export async function createComment(prevState: CommentFormState, formData: FormData): Promise<CommentFormState> {
    const comment = formData.get("comment") as string

    if (!comment) {
        return { error: "Comment is required", success: false }
    }

    return {
        success: true
    }
}

export async function createLike(postId: number) {
    // fake delay
    // await new Promise((resolve) => setTimeout(() => resolve(true), 2000))

    console.log(`like, Post Id ${postId}`)
}