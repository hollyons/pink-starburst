import type { TimeOfDay } from '../context/TimeOfDayContext';

export const timeOfDayBgMap: Record<TimeOfDay, string> = {
  twilight: 'bg-[#856f77]', // dusky purple
  sunrise: 'bg-[#ffdb99]',  // warm yellow
  morning: 'bg-mint',       // fresh mint
  afternoon: 'bg-sage',     // soft white
  sunset: 'bg-cherry',      // reddish
  dusk: 'bg-plum',          // moody plum
  night: 'bg-slateNight',   // dark blue-gray
  deadOfNight: 'bg-pine',   // deep green-black
};

export const timeOfDayTextMap: Record<TimeOfDay, string> = {
  twilight: 'text-sage',
  sunrise: 'text-pine',
  morning: 'text-pine',
  afternoon: 'text-pine',
  sunset: '[#ffdb99]',
  dusk: 'text-sage',
  night: 'text-sage',
  deadOfNight: 'text-sage',
};