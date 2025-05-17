"use client";

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Increment</button>
        </>
    )
}

export default Counter

