// src/components/BitcoinDashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function BitcoinDashboard() {
  // Mock data: Bitcoin holdings by companies (BTC)
  const data = {
    labels: ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025'],
    datasets: [
      {
        label: 'MicroStrategy (BTC)',
        data: [5000, 5200, 5500, 5800, 6000],
        borderColor: '#f7931a', // Bitcoin orange
        backgroundColor: 'rgba(247, 147, 26, 0.2)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Tesla (BTC)',
        data: [1000, 1100, 1050, 1200, 1300],
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      title: {
        display: true,
        text: 'Corporate Bitcoin Holdings (2025)',
        color: '#333',
        font: { size: 18 }
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#333',
        borderColor: '#f7931a',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Month', color: '#333' },
        ticks: { color: '#333' }
      },
      y: {
        title: { display: true, text: 'Bitcoin (BTC)', color: '#333' },
        ticks: { color: '#333' },
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#f7931a', textAlign: 'center' }}>Bitcoin for Corporations Dashboard</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default BitcoinDashboard;