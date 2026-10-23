import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page counter-page">
      <section className="panel">
        <h1>React Counter App</h1>
        <p className="count" aria-live="polite">{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(current => current + 1)}>Increment +</button>
          <button className="secondary" onClick={() => setCount(current => current - 1)}>Decrement −</button>
          <button className="reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>
    </main>
  )
}
