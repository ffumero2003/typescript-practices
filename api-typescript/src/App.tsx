import { useEffect, useState } from 'react'
import type { Character } from './types'
import "./styles/figures.css"

function App() {
  const [chars, setChars] = useState<Character[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const info = async() => {
      try{
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if(!res.ok) throw new Error("Error");
        const data = await res.json();
        setChars(data.results as Character[])
      } catch(err){
        setError("No se pudieron cargar los personajes")
      } finally{
        setLoading(false)
      }
    };
    info()
  }, [])

  if(error) return <p>{error}</p>
  if(loading) return <p>{loading}</p>

  return (
    <main>
      <h1 className='header'>Personajes</h1>
      <div className='container'>
        {chars.map((c) => {
          return(
            <figure>
              <img src={c.image} alt={c.name} />
              <figcaption>{c.name}</figcaption>
            </figure>
          )
        })}
      </div>
    </main>
  )
}

export default App
