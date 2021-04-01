import { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import '../styles/Graphs.css';

const Dashboard = () => {

  const barCanvasRef = useRef(null)
  const pieCanvasRef = useRef(null)

  useEffect(() => {
    const canvas1 = barCanvasRef.current
    canvas1.style.backgroundColor = 'rgba(255,255,255,255)';
    new Chart(canvas1, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })

    const canvas2 = pieCanvasRef.current
    canvas2.style.backgroundColor = 'rgba(255,255,255,255)';
    new Chart(canvas2,  {
      type: 'pie',
      data: {
        labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
          label: '# of Tomatoes',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
      }
    })
  }, [])

  return (
    <div id="parent-container">
      <div className="chart-container">
        <canvas  width="1000" height="1000" ref={barCanvasRef} />
      </div>
      <div className="chart-container">
        <canvas width="1000" height="1000" ref={pieCanvasRef} />
      </div>
   
    </div>
  );
}

export default Dashboard;
