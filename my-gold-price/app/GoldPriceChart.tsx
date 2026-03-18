'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Filler, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface Props {
  labels: string[];
  data: number[];
}

export default function GoldPriceChart({ labels, data }: Props) {
  return (
    <Line
      data={{
        labels,
        datasets: [{
          label: '回收價',
          data,
          borderColor: '#D4AF37',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.1,
          pointRadius: 2,
        }],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#f3f4f6' } },
          x: { grid: { display: false } },
        },
      }}
    />
  );
}
