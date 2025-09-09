import type { PropsResults } from "../types";

export default function ResultsCard({ results, moneda }: PropsResults) {
  const format = new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: moneda,
    minimumFractionDigits: 2,
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Resultados</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="flex justify-between">
          <span className="font-medium">Cuota periódica:</span>
          <span className="text-green-600 font-semibold">
            {format.format(results.cuotaPeriodica)}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Número total de pagos:</span>
          <span>{results.numeroTotPagos}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Total pagado:</span>
          <span className="text-blue-600 font-semibold">
            {format.format(results.totalPagado)}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Intereses totales:</span>
          <span className="text-red-600 font-semibold">
            {format.format(results.interesesTot)}
          </span>
        </li>
      </ul>
    </div>
  );
}
