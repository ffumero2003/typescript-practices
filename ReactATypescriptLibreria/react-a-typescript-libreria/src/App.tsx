import { useState, useEffect } from 'react'
import axios from "axios"

type Character = {
  id: number;
  name: string;
  species: string;
}

type ApiList<T> = {
  results: T[]
}

function App() {
  const [data, setData] = useState<Character[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const info = async() => {
      try{
        const { data } = await axios.get<ApiList<Character>>("https://rickandmortyapi.com/api/character")
        setData(data.results)
      } finally{
        setCargando(false)
      }
    }
    info()
  }, [])
  
  if(cargando) return <p>Cargando</p>

  return (
    <>
      {data.map(char => (
        <li key={char.id}>{char.species}</li>
      ))}
    </>
  )
}

export default App
