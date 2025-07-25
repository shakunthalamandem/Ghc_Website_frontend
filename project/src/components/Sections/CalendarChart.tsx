// components/Charts/CalendarChart.tsx
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {  subDays } from 'date-fns';

interface CalendarData {
  date: string;
  value: number;
}

interface CalendarChartProps {
  data: CalendarData[];
  title: string;
}

const CalendarChart: React.FC<CalendarChartProps> = ({ data, title }) => {
  const endDate = new Date();
  const startDate = subDays(endDate, 180); // show last 6 months

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={data}
        classForValue={(value) => {
          if (!value || value.value === 0) return 'color-empty';
          if (value.value < 2) return 'color-scale-1';
          if (value.value < 4) return 'color-scale-2';
          if (value.value < 6) return 'color-scale-3';
          return 'color-scale-4';
        }}
        tooltipDataAttrs={(value: any) => {
          return {
            'data-tip': `${value.date}: ${value.value} event(s)`,
          };
        }}
        showWeekdayLabels
      />
    </div>
  );
};

export default CalendarChart;
