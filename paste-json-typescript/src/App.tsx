import { useEffect, useState } from 'react'
import type { Result } from "./types";



function App() {
  const [loc, setLoc] = useState<Result[]>([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const info = async() => {
      try{
        const res = await fetch("https://rickandmortyapi.com/api/location")
        if(!res.ok) throw new Error("Error");
        const data = await res.json();

        const totalPages: number = data.info.pages;

        const requests = Array.from({ length: totalPages - 1 }, (_, i) =>
          fetch(`https://rickandmortyapi.com/api/location?page=${i + 2}`).then((r) => r.json())
        );

        const results = await Promise.all(requests);

        const allLocations = [
        ...data.results,
        ...results.flatMap((r) => r.results),
      ];

        setLoc(allLocations as Result[])
      } catch(err){
        setError("Error")
      } finally{
        setLoading(false)
      }
    }
    info()
  }, [])
  
  if(error) return <p>{error}</p>
  if(loading) return <p>Cargando...</p>

  return (
    <div >
      <h1 className='text-center text-2xl font-bold mt-2'>Rick and Morty Locs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        
        {loc.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <h1 className="text-xl font-bold text-gray-800 mb-1">{location.name}</h1>
            <h2 className="text-md text-indigo-600 font-medium">{location.type}</h2>
            <h3 className="text-sm text-gray-600 mb-3">{location.dimension}</h3>

            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700 mb-1">Residents:</p>
              <ul className="space-y-1 max-h-28 overflow-y-auto text-sm text-gray-600">
                {location.residents.length > 0 ? (
                  location.residents.map((res, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-100 rounded-md px-2 py-1 truncate"
                    >
                      {res}
                    </li>
                  ))
                ) : (
                  <li className="italic text-gray-400">No residents</li>
                )}
              </ul>
            </div>

            <h4 className="text-sm text-gray-700 truncate">
              <span className="font-semibold">URL:</span> {location.url}
            </h4>

            <h5 className="text-xs text-gray-500 mt-2">
              <span className="font-semibold">Created:</span>{" "}
              {new Date(location.created).toLocaleDateString()}
            </h5>
          </div>
        ))}
      </div>
    </div>

  )
}

export default App
