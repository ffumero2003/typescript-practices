import type { PropsResults } from "../types";

export default function ResultCard({ results }: PropsResults) {
  return (
    <div className="mt-6 w-full max-w-4xl rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Contraseña</th>
            <th className="px-4 py-2 text-left">Correo</th>
            <th className="px-4 py-2 text-left">Alias</th>
            <th className="px-4 py-2 text-left">Edad</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <td className="px-4 py-2">{r.nombre}</td>
              <td className="px-4 py-2">{r.password}</td>
              <td className="px-4 py-2">{r.email}</td>
              <td className="px-4 py-2">{r.alias}</td>
              <td className="px-4 py-2">{r.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
