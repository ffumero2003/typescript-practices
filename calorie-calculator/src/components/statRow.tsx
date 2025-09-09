export default function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-3">
      <span className="text-sm text-zinc-600 dark:text-zinc-300">{label}</span>
      <span className="font-semibold text-zinc-900 dark:text-zinc-50">{value}</span>
    </div>
  );
}
