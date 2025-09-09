export default function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between rounded-lg border border-emerald-500/20 bg-white/5 px-4 py-3 text-emerald-100">
      <span className="opacity-80">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}