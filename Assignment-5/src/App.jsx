import { useState } from 'react'
import './App.css'

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', course: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
  }

  return (
    <main className="page">
      <h1>Controlled React Form</h1>
      <section className="panel">
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
          <label htmlFor="course">Course</label>
          <input id="course" name="course" value={form.course} onChange={handleChange} placeholder="Enter your course" />
        </form>
      </section>
      <section className="panel preview">
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> {form.name || '—'}</p>
        <p><strong>Email:</strong> {form.email || '—'}</p>
        <p><strong>Course:</strong> {form.course || '—'}</p>
      </section>
    </main>
  )
}
