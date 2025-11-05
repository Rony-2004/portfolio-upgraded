'use client';

export default function CodingTime() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-800 p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-mono font-bold text-white">Coding Time</h2>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Main Hours Display */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold font-mono text-white">650</span>
            <span className="text-lg font-medium text-neutral-400">hrs</span>
          </div>
          <p className="text-sm text-neutral-500">All time</p>
        </div>

        {/* Daily Average */}
        <div className="pt-2 border-t border-neutral-800">
          <p className="text-sm text-neutral-400">
            Daily avg: <span className="font-semibold text-white font-mono">2h 31m</span>
          </p>
        </div>
      </div>
    </div>
  );
}
