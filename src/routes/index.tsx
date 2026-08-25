import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="frame">
      <h1>Welcome to TanStack Start</h1>
    </div>
  )
}
