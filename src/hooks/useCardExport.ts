import { useCallback, useState } from 'react';
import { toPng } from 'html-to-image';

export function useCardExport() {
  const [isExporting, setIsExporting] = useState(false);

  const exportCard = useCallback(async (elementId: string, filename: string = 'ff14-card.png') => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Export element not found');
      return;
    }

    setIsExporting(true);
    try {
      const dataUrl = await toPng(element, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#F8F4EC',
      });

      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export card:', error);
    } finally {
      setIsExporting(false);
    }
  }, []);

  return { exportCard, isExporting };
}
