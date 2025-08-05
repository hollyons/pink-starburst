import React from 'react';
import { useTimeOfDay } from '../context/TimeOfDayContext';

const Greeting: React.FC = () => {
  const { timeOfDay } = useTimeOfDay();

  const greetingMap: Record<typeof timeOfDay, string> = {
    twilight: 'Hi there early bird',
    sunrise: 'Good morning, sunshine',
    morning: 'Let’s seize the day, gentle soul',
    afternoon: 'Howdy pardner',
    sunset: 'Peace to you in the golden hour',
    dusk: 'Hello, twilight dreamer',
    night: 'Sweet dreams lovely one',
    deadOfNight: 'Hey there night owl',
  };
  console.log('Current time of day:', timeOfDay);

  // Fallback in case timeOfDay is not recognized
  if (!greetingMap[timeOfDay]) {
    return <h1 className="mt-0 mb-16 max-w-[640px] font-normal text-[3rem] font-fraunces">Hello there friend!</h1>;
  }
  // Return the greeting based on the current time of day
  return <h1 className="mt-0 mb-16 max-w-[640px] font-normal text-[3rem] font-fraunces">{greetingMap[timeOfDay]}</h1>;
};

export default Greeting;