import { Bar, Chart } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LinearScale, BarElement } from "chart.js";
import { useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);




function Home() {

    return (
        <div className="Main">
            <div className="Header">
                <h1 className="Title">Co2Ampel</h1>
            </div>


            <MainPart />
            <GraphArea />
            <TrafficLight />
        </div>


    )

}
export default Home;



function MainPart() {
    return (
        <div className="MainPart">
            <button id="redbutton">Rote Farbe anstellen</button>
            <button id="yellowbutton">Gelbe Farbe anstellen</button>
            <button id="greenbutton">Grüne Farbe anstellen</button>
        </div>
    )
}



function TrafficLight() {
    return (
        <div className="trafficLight">
            <div className="square">
                <div className="circle"></div>
                <div className="circle0"></div>
                <div className="circle1"></div>
            </div>
        </div>
    )
}





function GraphArea() {


    const [co2data, setCo2Data] = useState([412, 481, 491, 433, 451, 444, 420, 464, 418, 461])



    return (
        <div className="graphArea">
            <BarChart data={co2data} />
        </div>
    )
}

interface IBarChart {
    data: number[],
}

function BarChart(props: IBarChart) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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

    const labels = ["-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0"]
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: props.data,
            backgroundColor: [
                'black'
            ],
        }]
    };

    return (
        <Bar data={data} options={options} />
    )

}


