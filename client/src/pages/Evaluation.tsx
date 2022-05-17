import { Bar, Chart } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LinearScale, BarElement } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);


function Evaluation() {
    return (
        <div className="Main">

            <BarChart />
        </div>
    )
}
export default Evaluation;


function BarChart() {

    const options = {
        responsive: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    }

    const labels = ["1", "2", "3", "4", "5", "6"]
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                '#003D69'
            ],
        }]
    };

    return (
        <Bar data={data} options={options} />
    )

}