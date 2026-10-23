import './App.css'

function ProfileCard({ name, image, description }) {
  return (
    <article className="profile-card">
      <img className="avatar" src={image} alt={`${name} profile`} />
      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  )
}

export default function App() {
  return (
    <main className="page">
      <h1>React Profile Card using Props</h1>
      <ProfileCard
        name="Smit Parthe"
        image="https://placehold.co/160x160?text=Profile"
        description="MCA student learning full-stack web development with React."
      />
    </main>
  )
}
