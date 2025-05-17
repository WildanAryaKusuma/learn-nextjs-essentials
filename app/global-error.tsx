"use client"

export default function GlobalError({error, reset}: { error: Error & { digest?: string}; reset: () => void }) {
  // Log the error to an error reporting service
  console.error(error)

  return (
    <html>
      <head>
        <title>Something went wrong</title>
      </head>
      <body>
        <h2>Something went wrong</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}