import { useEffect, useState } from "react";
import'./Chart.css'
import data from "./data.json"
import { Chart as ChartJS, ArcElement, CategoryScale,BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line ,Bar} from 'react-chartjs-2';
import 'chartjs-plugin-zoom';
import Type from "../Type";
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


const Chart = () => {
  const [chartData, setChartData] = useState({})
  useEffect(() => {

    setTimeout(() => {
      setChartData({
        labels: data.map(item => item.name),
        datasets: [
          {
            
            label: 'Expense',
            data: data.map((item) => item.salary),
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(90, 179, 113)',
          },
          {
            label: 'Income',
            data: data.map((item) => item.expense),
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
        
      })
    }, 1000)

  }, [])
 
  return (
    <div>

    <div className="haed text-center">Data Visualization Chart</div>
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
                    zoom: {
                      enabled: true,
                      mode: 'x',
                    },
                    pan: {
                      enabled: true,
                      mode: 'x',
                    },
                  },
                }} 
              data={chartData} 
            />
          )
        }
      </div>
</div>
      <div className="col-md-6">
      <div className='bar_chart '>
        {
          chartData && chartData?.datasets && (
            <Bar 
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
    {/* <div className="col-md row">
      <div className="col-md-6">
        <Type/>
      </div>
    </div> */}
    </div>
  )
}

export default Chart