import type { CroppedArea, Job } from '../../types';
import { roleColors, jobPixelIcons } from '../../data/jobs';

interface PhotoAreaProps {
  photoUrl: string | null;
  croppedAreaPixels: CroppedArea | null;
  mainJob: Job | null;
  characterName: string;
  dataCenter: string;
  server: string;
}

export function PhotoArea({
  photoUrl,
  croppedAreaPixels,
  mainJob,
  characterName,
  dataCenter,
  server,
}: PhotoAreaProps) {
  const getCroppedImageStyle = () => {
    if (!photoUrl || !croppedAreaPixels) {
      return {};
    }

    return {
      backgroundImage: `url(${photoUrl})`,
      backgroundPosition: `-${croppedAreaPixels.x}px -${croppedAreaPixels.y}px`,
      backgroundSize: 'auto',
    };
  };

  return (
    <div className="relative w-full h-[480px] overflow-hidden bg-bg-warm-gray">
      {/* Photo background */}
      {photoUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={
            croppedAreaPixels
              ? getCroppedImageStyle()
              : { backgroundImage: `url(${photoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          }
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-text-muted text-lg">點擊下方上傳照片</span>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Main job pixel art icon at top-right corner */}
      {mainJob && (
        <div
          className="absolute top-0 right-0 w-28 h-28 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${roleColors[mainJob.role]}CC 0%, ${roleColors[mainJob.role]}40 70%, transparent 100%)`,
            borderBottomLeftRadius: '100%',
          }}
        >
          <img
            src={jobPixelIcons[mainJob.id]}
            alt={mainJob.name}
            className="w-14 h-14 object-contain translate-x-3 -translate-y-3"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}

      {/* Character info on gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="font-display text-2xl text-white font-semibold drop-shadow-lg">
          {characterName || '角色名稱'}
        </h2>
        <p className="text-white/90 text-sm drop-shadow">
          {dataCenter && server ? `${dataCenter} / ${server}` : 'DC / Server'}
        </p>
      </div>
    </div>
  );
}
