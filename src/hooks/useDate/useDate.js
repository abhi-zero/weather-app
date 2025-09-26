import React from 'react'

export default function useDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "short",
  };
  const currentFullDate = today.toLocaleDateString("en-US", options);
  const shortDay = today.toLocaleDateString('en-US', { weekday: 'short' })

  function getShortDayFromIndex(index) {
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + index);


    return targetDate.toLocaleDateString('en-US', { weekday: 'short' })
  }

  function getLongDay() {
    const dayLabel = today.toLocaleDateString("en-US", { weekday: 'long' })
    return dayLabel;
  }
  function getDayIndex(timestamp) {


    let dayindex;
    if (!timestamp) {
      dayindex = new Date(timestamp).getDay();
    } else {
      dayindex = today.getDay();
    }

    return dayindex;
  }

  function formatHour(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
  }
  return { currentFullDate, shortDay, getShortDayFromIndex, getLongDay, formatHour, getDayIndex };
}
