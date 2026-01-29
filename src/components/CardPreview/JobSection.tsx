import type { Job } from '../../types';
import { roleColors } from '../../data/jobs';

interface JobSectionProps {
  subJobs: Job[];
}

export function JobSection({ subJobs }: JobSectionProps) {
  const placeholders = Array(4 - subJobs.length).fill(null);

  return (
    <div className="px-4 py-3">
      <h3 className="text-xs font-medium text-text-muted mb-2 uppercase tracking-wider">副職業</h3>
      <div className="flex gap-3">
        {subJobs.map((job) => (
          <div
            key={job.id}
            className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm border border-border-gold-light"
            style={{ backgroundColor: roleColors[job.role] }}
          >
            <span className="text-white font-bold text-xs">{job.abbr}</span>
          </div>
        ))}
        {placeholders.map((_, idx) => (
          <div
            key={`placeholder-${idx}`}
            className="w-12 h-12 rounded-lg flex items-center justify-center border-2 border-dashed border-border-gold-light bg-bg-warm-gray/50"
          >
            <span className="text-text-muted text-xl">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
