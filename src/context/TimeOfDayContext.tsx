import React, { createContext, useContext, useEffect, useState } from 'react';

type TimeOfDay =
  | 'twilight'
  | 'sunrise'
  | 'morning'
  | 'afternoon'
  | 'sunset'
  | 'dusk'
  | 'night'
  | 'deadOfNight';

interface TimeOfDayContextType {
  timeOfDay: TimeOfDay;
}

const TimeOfDayContext = createContext<TimeOfDayContextType | undefined>(undefined);

const getTimeOfDay = (hour: number): TimeOfDay => {
  if (hour >= 4 && hour < 6) return 'twilight'; // 4–6 AM
  if (hour >= 6 && hour < 8) return 'sunrise'; // 6–8 AM
  if (hour >= 8 && hour < 12) return 'morning'; // 8 AM–12 PM
  if (hour >= 12 && hour < 16) return 'afternoon'; // 12–4 PM
  if (hour >= 16 && hour < 18) return 'sunset'; // 4–6 PM
  if (hour >= 18 && hour < 20) return 'dusk'; // 6–8 PM
  if (hour >= 20 && hour < 24) return 'night'; // 8 PM–12 AM
  return 'deadOfNight'; // 0–3
};

export const TimeOfDayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(() => getTimeOfDay(new Date().getHours()));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      setTimeOfDay(getTimeOfDay(currentHour));
    }, 60_000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeOfDayContext.Provider value={{ timeOfDay }}>
      {children}
    </TimeOfDayContext.Provider>
  );
};

export const useTimeOfDay = (): TimeOfDayContextType => {
  const context = useContext(TimeOfDayContext);
  if (!context) throw new Error('useTimeOfDay must be used within a TimeOfDayProvider');
  return context;
};
export type { TimeOfDay };