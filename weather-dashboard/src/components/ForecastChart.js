import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ForecastChart({ forecast }) {
  const data = {
    labels: forecast.map((day) =>
      new Date(day.dt_txt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Temperature (°C)",
        data: forecast.map((day) => day.main.temp),
        borderColor: "#f7f0f0",
        backgroundColor: "#020202",
      },
    ],
  };

  return <Line data={data} />;
}

export default ForecastChart;
