'use client';

interface TimelineEvent {
  date: string;
  role: string;
  company: string;
  color: string;
  position: number; // Position percentage on timeline (0-100)
}

const timelineEvents: TimelineEvent[] = [
  { date: 'Jul 2025', role: 'Backend Developer Intern', company: 'Marg ERP', color: 'bg-orange-500', position: 0 },
  { date: 'Sept 2025', role: 'Full Stack Developer Intern', company: 'NeuroinkX', color: 'bg-orange-500', position: 50 },
  { date: 'Oct 2025', role: 'Co-Founder', company: 'Fable Frame', color: 'bg-orange-500', position: 75 },
  { date: 'Nov 2025', role: 'Full Stack Developer', company: 'House of Edtech', color: 'bg-orange-500', position: 100 },
];

// Calculate journey months outside component
const calculateJourneyMonths = () => {
  const startDate = new Date(2025, 6, 1); // July 2025
  const currentDate = new Date(2025, 10, 6); // Nov 6, 2025
  return (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
         (currentDate.getMonth() - startDate.getMonth());
};

export default function CareerTimeline() {
  const journeyMonths = calculateJourneyMonths();

  return (
    <div className="relative h-full bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800/50 p-8 group hover:border-emerald-500/30 transition-all duration-300">
      <div className="space-y-12">
        {/* Title */}
        <h2 className="text-2xl font-mono text-white">
          Career Timeline
        </h2>

        {/* Timeline Container */}
        <div className="space-y-8">
          {/* Date Labels */}
          <div className="flex justify-between items-center text-sm text-neutral-400 font-mono">
            <span>{timelineEvents[0].date}</span>
            <span>{timelineEvents[1].date}</span>
          </div>

          {/* Timeline Bar */}
          <div className="relative">
            {/* Background bar */}
            <div className="h-1.5 bg-neutral-700/50 rounded-full overflow-hidden">
              {/* Gradient fill showing progress */}
              <div className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full transition-all duration-1000 w-full" />
            </div>

            {/* Timeline markers */}
            <div className="absolute inset-0">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 -translate-y-1/2 group/marker"
                  style={{ left: `${event.position}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {/* Marker dot with ring */}
                  <div className="relative">
                    <div className={`w-4 h-4 ${event.color} rounded-full border-4 border-neutral-900 shadow-lg transform transition-transform group-hover/marker:scale-125 cursor-pointer relative z-10`}>
                      {/* Pulse animation */}
                      <div className={`absolute inset-0 ${event.color} rounded-full animate-ping opacity-75`} />
                    </div>
                    {/* Outer ring */}
                    <div className="absolute inset-0 w-8 h-8 -translate-x-[6px] -translate-y-[6px] border-2 border-neutral-600/50 rounded-full" />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-neutral-800 text-white text-sm px-4 py-2 rounded-lg border border-neutral-700 shadow-xl min-w-max">
                      <div className="font-semibold text-white">{event.role}</div>
                      <div className="text-blue-400 text-xs mt-0.5">{event.company}</div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="border-4 border-transparent border-t-neutral-800" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Duration */}
          <div className="text-center">
            <p className="text-neutral-400 text-sm font-mono">
              Professional Journey: <span className="text-emerald-400 font-semibold">{journeyMonths} Months</span>
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800/50">
          <div className="text-center space-y-1">
            <p className="text-2xl font-bold text-orange-400">5</p>
            <p className="text-xs text-neutral-500 font-mono">Positions</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-2xl font-bold text-emerald-400">8</p>
            <p className="text-xs text-neutral-500 font-mono">Projects</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-2xl font-bold text-blue-400">22</p>
            <p className="text-xs text-neutral-500 font-mono">Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}
