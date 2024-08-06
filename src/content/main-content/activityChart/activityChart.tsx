import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Activity',
      color: 'white',
      font: {
        size: 20,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
        stepSize: 5000,
        beginAtZero: true,
      },
    },
  },
};

const labels = Array.from({ length: 23 }, (_, i) => (i + 5).toString());

const data = {
  labels,
  datasets: [
    {
      label: 'Activity',
      data: [1000, 5000, 8000, 7000, 3000, 6000, 4000, 9000, 5000, 7000, 10000, 12000, 15000, 11000, 9000, 8000, 7000, 6000, 11000, 14000, 12000, 10000, 9000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderRadius: 10,
    },
  ],
};

const ActivityChart: React.FC = () => {
  return <Bar options={options} data={data} className='bar-chart' />;
};

export default ActivityChart;
