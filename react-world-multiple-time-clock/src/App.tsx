import React, { FC, useEffect, useState } from 'react';

const HourOffsets = {
  Beijing: +8,
  'San Francisco': -8,
  'New York': -5,
  'Buenos Aires': -3,
  Madrid: +7,
  'New Delhi': +5.5,
};

export const App: FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ margin: 32 }}>
      <h1>Clock</h1>
      <p>
        {(date.getUTCHours() + HourOffsets['Beijing']).toString().padStart(2, '0')}:
        {date.getUTCMinutes().toString().padStart(2, '0')}:
        {date.getUTCSeconds().toString().padStart(2, '0')}.
        {date.getUTCMilliseconds().toString().padStart(3, '0')} (Beijing)
      </p>
      <p>--:--:--.--- (San Francisco)</p>
      <p>--:--:--.--- (New York)</p>
      <p>--:--:--.--- (Buenos Aires)</p>
      <p>--:--:--.--- (Madrid)</p>
      <p>--:--:--.--- (New Delhi)</p>
    </div>
  );
};
