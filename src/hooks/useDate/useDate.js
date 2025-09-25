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
    const shortDay = today.toLocaleDateString('en-US',{weekday : 'short'})

    function getShortDayFromIndex(index){
        const base = new Date();
        const targetDate = new Date(base);
        targetDate.setDate(base.getDate() + index);

        
        return targetDate.toLocaleDateString('en-US',{weekday : 'short'})
    }
    return {currentFullDate, shortDay, getShortDayFromIndex};
}
