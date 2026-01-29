import { useState, useCallback } from 'react';
import type { CardData, Job, CroppedArea } from '../types';
import { initialCardData } from '../types';

export function useCardState() {
  const [cardData, setCardData] = useState<CardData>(initialCardData);

  const updateCharacterName = useCallback((name: string) => {
    setCardData(prev => ({ ...prev, characterName: name }));
  }, []);

  const updateRegion = useCallback((region: string) => {
    setCardData(prev => ({
      ...prev,
      region,
      dataCenter: '',
      server: '',
    }));
  }, []);

  const updateDataCenter = useCallback((dataCenter: string) => {
    setCardData(prev => ({
      ...prev,
      dataCenter,
      server: '',
    }));
  }, []);

  const updateServer = useCallback((server: string) => {
    setCardData(prev => ({ ...prev, server }));
  }, []);

  const updateMainJob = useCallback((job: Job | null) => {
    setCardData(prev => ({ ...prev, mainJob: job }));
  }, []);

  const updateSubJobs = useCallback((jobs: Job[]) => {
    setCardData(prev => ({ ...prev, subJobs: jobs.slice(0, 4) }));
  }, []);

  const toggleSubJob = useCallback((job: Job) => {
    setCardData(prev => {
      const exists = prev.subJobs.some(j => j.id === job.id);
      if (exists) {
        return { ...prev, subJobs: prev.subJobs.filter(j => j.id !== job.id) };
      } else if (prev.subJobs.length < 4) {
        return { ...prev, subJobs: [...prev.subJobs, job] };
      }
      return prev;
    });
  }, []);

  const toggleWeekdayHour = useCallback((hour: number) => {
    setCardData(prev => ({
      ...prev,
      weekdayTime: {
        hours: prev.weekdayTime.hours.map((v, i) => i === hour ? !v : v)
      }
    }));
  }, []);

  const toggleHolidayHour = useCallback((hour: number) => {
    setCardData(prev => ({
      ...prev,
      holidayTime: {
        hours: prev.holidayTime.hours.map((v, i) => i === hour ? !v : v)
      }
    }));
  }, []);

  const updateIntroduction = useCallback((intro: string) => {
    setCardData(prev => ({ ...prev, introduction: intro }));
  }, []);

  const updatePhotoUrl = useCallback((url: string | null) => {
    setCardData(prev => ({ ...prev, photoUrl: url, croppedAreaPixels: null }));
  }, []);

  const updateCroppedAreaPixels = useCallback((area: CroppedArea | null) => {
    setCardData(prev => ({ ...prev, croppedAreaPixels: area }));
  }, []);

  return {
    cardData,
    updateCharacterName,
    updateRegion,
    updateDataCenter,
    updateServer,
    updateMainJob,
    updateSubJobs,
    toggleSubJob,
    toggleWeekdayHour,
    toggleHolidayHour,
    updateIntroduction,
    updatePhotoUrl,
    updateCroppedAreaPixels,
  };
}
