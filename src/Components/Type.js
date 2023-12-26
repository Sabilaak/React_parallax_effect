
import { useEffect, useState } from "react";
import data from "./Chart/data.json"
import { Chart as ChartJS, ArcElement, CategoryScale,BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, 
  Title,
  Tooltip,
  Legend,
  Filler
);
const Type = () => {
  const [chartData, setChartData] = useState({})
  useEffect(() => {

    setTimeout(() => {
      setChartData({
        labels: data.map(item => item.name),
        datasets: [
          {
            
            label: 'Expense',
            data: data.map((item) => item.salary),

            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(90, 179, 113)',
          },
          {
            label: 'Income',
            data: data.map((item) => item.expense),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
        
      })
    }, 1000)

  }, [])
 
  return (
    <div>

    
    <div className="chart_main row md">
<div className="col-md-6">
<div className='line_chart '>
        {
          chartData && chartData?.datasets && (
            <Line 
              options={ {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Family Revenue',
                    },
                  },
                }} 
              data={chartData} 
            />
          )
        }
      </div>
</div>  
    </div>
    </div>
  )
}

export default Type