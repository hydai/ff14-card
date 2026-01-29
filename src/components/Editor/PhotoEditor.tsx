import { useState, useCallback, useRef } from 'react';
import Cropper from 'react-easy-crop';
import type { Area } from 'react-easy-crop';
import type { CroppedArea } from '../../types';

interface PhotoEditorProps {
  photoUrl: string | null;
  onPhotoChange: (url: string | null) => void;
  onCropComplete: (croppedArea: CroppedArea | null) => void;
}

export function PhotoEditor({
  photoUrl,
  onPhotoChange,
  onCropComplete,
}: PhotoEditorProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onPhotoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = useCallback(
    (_: Area, croppedAreaPixels: Area) => {
      onCropComplete({
        x: croppedAreaPixels.x,
        y: croppedAreaPixels.y,
        width: croppedAreaPixels.width,
        height: croppedAreaPixels.height,
      });
    },
    [onCropComplete]
  );

  const handleRemovePhoto = () => {
    onPhotoChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-text-secondary">照片</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        id="photo-upload"
      />

      {!photoUrl ? (
        <label
          htmlFor="photo-upload"
          className="block w-full p-8 border-2 border-dashed border-border-gold rounded-lg cursor-pointer hover:border-accent-gold hover:bg-bg-cream/50 transition-colors text-center"
        >
          <div className="text-text-muted">
            <svg
              className="mx-auto h-12 w-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">點擊上傳照片</span>
          </div>
        </label>
      ) : (
        <div className="space-y-4">
          {/* Cropper */}
          <div className="relative h-48 rounded-lg overflow-hidden bg-black">
            <Cropper
              image={photoUrl}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={600 / 480}
              onCropChange={setCrop}
              onCropComplete={handleCropComplete}
              onZoomChange={setZoom}
            />
          </div>

          {/* Controls */}
          <div className="space-y-3">
            <div>
              <label className="text-xs text-text-muted block mb-1">縮放</label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1">旋轉</label>
              <input
                type="range"
                min={0}
                max={360}
                step={1}
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <label
              htmlFor="photo-upload"
              className="flex-1 py-2 px-4 text-sm text-center border border-border-gold rounded-lg cursor-pointer hover:bg-bg-cream transition-colors"
            >
              更換照片
            </label>
            <button
              onClick={handleRemovePhoto}
              className="py-2 px-4 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
            >
              移除
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
