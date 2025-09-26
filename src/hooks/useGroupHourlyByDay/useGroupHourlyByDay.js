import React from 'react'

export default function useGroupHourlyByDay(hourly) {
     if (!hourly) return [];
    const groupedByDay = {};

    hourly.time.forEach((timeStamp, i) => {
        const date = timeStamp.split('T')[0];
        const time = timeStamp
        const label = new Date(time).toLocaleDateString("en-US", { weekday: 'long' })


        if (!groupedByDay[date]) {
            groupedByDay[date] = {
                date,
                label,
                hours : []
            }
        }

        groupedByDay[date].hours.push({
            time,
            temperature: hourly.temperature_2m[i],
            weathercode: hourly.weather_code[i],
        })



    });

    return Object.values(groupedByDay).sort((a,b ) => new Date(a.date) - new Date(b.date));
}
