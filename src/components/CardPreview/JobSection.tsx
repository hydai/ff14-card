import type { Job } from '../../types';
import { roleColors } from '../../data/jobs';

interface JobSectionProps {
  subJobs: Job[];
}

export function JobSection({ subJobs }: JobSectionProps) {
  const placeholders = Array(4 - subJobs.length).fill(null);

  return (
    <div className="p-4 h-full flex flex-col">
      <h3 className="text-xs font-medium text-text-muted mb-3 uppercase tracking-wider">副職業</h3>
      <div className="grid grid-cols-2 gap-2 flex-1 content-start">
        {subJobs.map((job) => (
          <div
            key={job.id}
            className="h-12 rounded-lg flex items-center justify-center shadow-sm border border-border-gold-light"
            style={{ backgroundColor: roleColors[job.role] }}
          >
            <span className="text-white font-bold text-sm">{job.abbr}</span>
          </div>
        ))}
        {placeholders.map((_, idx) => (
          <div
            key={`placeholder-${idx}`}
            className="h-12 rounded-lg flex items-center justify-center border-2 border-dashed border-border-gold-light bg-bg-warm-gray/50"
          >
            <span className="text-text-muted text-lg">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
